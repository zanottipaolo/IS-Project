import React, { useEffect } from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import axios from "axios";

interface Milestone {
	id: number;
	amount: number;
	monthlySaving: number;
	dueDate: string;
	name: string;
}

function createData(
	id: number,
	name: string,
	amount: number,
	date: string,
	monthlySaving: number
): Milestone {
	return {
		id,
		name,
		amount,
		dueDate: date,
		monthlySaving,
	};
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
	order: Order,
	orderBy: Key
): (
	a: { [key in Key]: number | string },
	b: { [key in Key]: number | string }
) => number {
	return order === "desc"
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
	array: readonly T[],
	comparator: (a: T, b: T) => number
) {
	const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) {
			return order;
		}
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
	disablePadding: boolean;
	id: keyof Milestone;
	label: string;
	numeric: boolean;
}

const headCells: readonly HeadCell[] = [
	{
		id: "name",
		numeric: false,
		disablePadding: true,
		label: "Description",
	},
	{
		id: "amount",
		numeric: true,
		disablePadding: false,
		label: "Amount",
	},
	{
		id: "date",
		numeric: false,
		disablePadding: false,
		label: "Due date",
	},
	{
		id: "monthlySaving",
		numeric: true,
		disablePadding: false,
		label: "Monthly saving",
	},
];

interface EnhancedTableProps {
	numSelected: number;
	onRequestSort: (
		event: React.MouseEvent<unknown>,
		property: keyof Milestone
	) => void;
	onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
	order: Order;
	orderBy: string;
	rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
	const {
		onSelectAllClick,
		order,
		orderBy,
		numSelected,
		rowCount,
		onRequestSort,
	} = props;
	const createSortHandler =
		(property: keyof Milestone) => (event: React.MouseEvent<unknown>) => {
			onRequestSort(event, property);
		};

	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">
					<Checkbox
						color="primary"
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{
							"aria-label": "select all milestones",
						}}
					/>
				</TableCell>
				{headCells.map((headCell, index) => (
					<TableCell
						key={headCell.id}
						align={index === 0 ? "left" : "right"}
						padding={headCell.disablePadding ? "none" : "normal"}
						sortDirection={orderBy === headCell.id ? order : false}
						sx={{ fontWeight: 700 }}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : "asc"}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<Box component="span" sx={visuallyHidden}>
									{order === "desc" ? "sorted descending" : "sorted ascending"}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

interface EnhancedTableToolbarProps {
	numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
	const { numSelected } = props;

	return (
		<Toolbar
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 },
				...(numSelected > 0 && {
					bgcolor: (theme) =>
						alpha(
							theme.palette.primary.main,
							theme.palette.action.activatedOpacity
						),
				}),
			}}
		>
			{numSelected > 0 ? (
				<Typography
					sx={{ flex: "1 1 100%" }}
					color="inherit"
					variant="subtitle1"
					component="div"
				>
					{numSelected} selected
				</Typography>
			) : (
				<Typography
					sx={{ flex: "1 1 100%" }}
					variant="h6"
					id="tableTitle"
					component="div"
				>
					Milestones
				</Typography>
			)}
			{numSelected > 0 ? (
				<Tooltip title="Delete">
					<IconButton>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			) : (
				<Tooltip title="Filter list">
					<IconButton>
						<FilterListIcon />
					</IconButton>
				</Tooltip>
			)}
		</Toolbar>
	);
}

const DashMilestones: React.FC = () => {
	const [order, setOrder] = React.useState<Order>("asc");
	const [orderBy, setOrderBy] = React.useState<keyof Milestone>("amount");
	const [selected, setSelected] = React.useState<readonly string[]>([]);
	const [page, setPage] = React.useState(0);
	const [dense, setDense] = React.useState(false);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [milestones, setMilestones] = React.useState<Milestone[] | null>(null);

	useEffect(() => {
		axios
			.get("http://localhost:8000/milestones/", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			})
			.then((response) => {
				let result = [];
				for (const r of response.data) {
					result.push(
						createData(
							r.id,
							r.description,
							r.amount,
							r.due_date,
							r.monthly_saving
						)
					);
				}
				setMilestones(result);
			});
	}, []);

	const handleRequestSort = (
		event: React.MouseEvent<unknown>,
		property: keyof Milestone
	) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked && milestones) {
			const newSelected = milestones.map((n) => n.id.toString());
			setSelected(newSelected);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
		const selectedIndex = selected.indexOf(id);
		let newSelected: readonly string[] = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1)
			);
		}

		setSelected(newSelected);
	};

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDense(event.target.checked);
	};

	const isSelected = (id: string) => selected.indexOf(id) !== -1;

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 && milestones
			? Math.max(0, (1 + page) * rowsPerPage - milestones.length)
			: 0;

	if (milestones)
		return (
			<Box sx={{ width: "100%" }}>
				<Paper sx={{ width: "100%", mb: 2 }}>
					<EnhancedTableToolbar numSelected={selected.length} />
					<TableContainer>
						<Table
							sx={{ minWidth: 750 }}
							aria-labelledby="tableTitle"
							size={dense ? "small" : "medium"}
						>
							<EnhancedTableHead
								numSelected={selected.length}
								order={order}
								orderBy={orderBy}
								onSelectAllClick={handleSelectAllClick}
								onRequestSort={handleRequestSort}
								rowCount={milestones.length}
							/>
							<TableBody>
								{stableSort(milestones, getComparator(order, orderBy))
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row, index) => {
										const isItemSelected = isSelected(row.id.toString());
										const labelId = `enhanced-table-checkbox-${index}`;

										return (
											<TableRow
												hover
												onClick={(event) =>
													handleClick(event, row.id.toString())
												}
												role="checkbox"
												aria-checked={isItemSelected}
												tabIndex={-1}
												key={row.id.toString()}
												selected={isItemSelected}
											>
												<TableCell padding="checkbox">
													<Checkbox
														color="primary"
														checked={isItemSelected}
														inputProps={{
															"aria-labelledby": labelId,
														}}
													/>
												</TableCell>
												<TableCell
													component="th"
													id={labelId}
													scope="row"
													padding="none"
												>
													{row.name}
												</TableCell>
												<TableCell align="right">{row.amount}</TableCell>
												<TableCell align="right">{row.dueDate}</TableCell>
												<TableCell align="right">{row.monthlySaving}</TableCell>
											</TableRow>
										);
									})}
								{emptyRows > 0 && (
									<TableRow
										style={{
											height: (dense ? 33 : 53) * emptyRows,
										}}
									>
										<TableCell colSpan={6} />
									</TableRow>
								)}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						rowsPerPageOptions={[5, 10, 25]}
						component="div"
						count={milestones.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</Paper>
				<FormControlLabel
					control={<Switch checked={dense} onChange={handleChangeDense} />}
					label="Dense padding"
				/>
			</Box>
		);
	else return <div>Loading</div>;
};

export default DashMilestones;
