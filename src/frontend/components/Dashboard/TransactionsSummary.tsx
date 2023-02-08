import { Box, Fab, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddTransactionDialog from "../../dialogs/AddTransactionDialog";
import axios from "axios";
import { AddTransactionContext } from "../../pages";

const TransactionsSummary = () => {
	const [totalAmount, setTotalAmount] = useState(0);
	const [state, setState] = useState("idle");
	const [addTransactionDialogOpen, setAddTransactionDialogOpen] =
		useState(false);
	const { addTransactionState } = useContext(AddTransactionContext);

	const handleCloseAddTransactionDialog = () => {
		setAddTransactionDialogOpen(false);
	};

	const handleOpenAddTransactionDialog = () => {
		setAddTransactionDialogOpen(true);
	};

	const fetchTotalAmount = () => {
		let total = 0;
		axios
			.get("http://localhost:8000/bank_accounts/", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			})
			.then((response) => {
				for (const r of response.data) {
					total += r.current_amount;
				}
				setTotalAmount(total);
				setState("completed");
			});
	};

	useEffect(() => {
		fetchTotalAmount();
	}, []);

	useEffect(() => {
		if (addTransactionState === "completed") {
			fetchTotalAmount();
		}
	}, [addTransactionState]);

	return (
		<>
			<AddTransactionDialog
				open={addTransactionDialogOpen}
				handleClose={handleCloseAddTransactionDialog}
			/>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				{state === "completed" ? (
					<Typography variant="h2" gutterBottom>
						€ {totalAmount}
					</Typography>
				) : (
					<span>Loading</span>
				)}

				<Fab
					color="primary"
					aria-label="add transaction"
					onClick={handleOpenAddTransactionDialog}
				>
					<AddIcon />
				</Fab>
			</Box>
		</>
	);
};

export default TransactionsSummary;
