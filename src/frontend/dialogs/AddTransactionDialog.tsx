import React, { useContext, useEffect, useState } from "react";

// Components
import {
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	FormControl,
	InputAdornment,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
	SelectChangeEvent,
	Stack,
	TextField,
} from "@mui/material";

// Datepicker
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import axios from "axios";
import { AddTransactionContext } from "../pages";

const AddTransactionDialog = (props: {
	open: boolean;
	handleClose: () => void;
}) => {
	const { open, handleClose } = props;

	const { addTransactionState, setAddTransactionState } = useContext(
		AddTransactionContext
	);

	const [description, setDescription] = useState("");
	const [amount, setAmount] = useState("");
	const [bankAccounts, setBankAccounts] = useState<
		{ id: number; name: string }[] | null
	>(null);
	const [selectedBankAccount, setSelectedBankAccount] = useState("");
	const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(
		dayjs(new Date())
	);
	const [categories, setCategories] = useState<
		{ id: number; name: string }[] | null
	>(null);
	const [selectedCategory, setSelectedCategory] = useState("");

	useEffect(() => {
		setAddTransactionState("idle");
		axios
			.get("http://localhost:8000/bank_accounts/", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			})
			.then((response) => {
				setBankAccounts(
					response.data.map((r: { id: any; name: any }) => {
						return { id: r.id, name: r.name };
					})
				);
			});

		axios
			.get("http://localhost:8000/categories/", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			})
			.then((response) => {
				setCategories(
					response.data.map((r: { id: any; name: any }) => {
						return { id: r.id, name: r.name };
					})
				);
			});
	}, []);

	const handleChangeBankAccount = (event: SelectChangeEvent) => {
		setSelectedBankAccount(event.target.value as string);
	};

	const handleChangeDate = (newValue: Dayjs | null) => {
		setSelectedDate(newValue);
	};

	const handleChangeCategory = (event: SelectChangeEvent) => {
		setSelectedCategory(event.target.value as string);
	};

	const handleSubmit = () => {
		axios
			.post(
				"http://localhost:8000/transactions/",
				{
					description: description,
					amount: amount,
					bank_account: selectedBankAccount,
					date: selectedDate ? selectedDate.format("YYYY-MM-DD") : null,
					category: selectedCategory,
					currency: 1,
				},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
					},
				}
			)
			.then(() => {
				// Clear dialog
				setDescription("");
				setAmount("");
				setSelectedBankAccount("");
				setSelectedDate(dayjs(new Date()));
				setSelectedCategories("");

				setAddTransactionState("completed");
				handleClose();
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Add transaction</DialogTitle>
			<DialogContent style={{ paddingTop: 10 }}>
				<Stack spacing={2}>
					<TextField
						label="Description"
						value={description}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							setDescription(event.target.value);
						}}
					/>
					<FormControl fullWidth sx={{ m: 1 }}>
						<InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
						<OutlinedInput
							inputProps={{
								inputMode: "numeric",
								pattern: "^d+(?:.d{1,2})?$",
								step: "0.01",
							}}
							startAdornment={
								<InputAdornment position="start">$</InputAdornment>
							}
							label="Amount"
							type="number"
							value={amount}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								setAmount(event.target.value);
							}}
						/>
					</FormControl>
					{bankAccounts ? (
						<FormControl fullWidth>
							<InputLabel>Bank account</InputLabel>
							<Select
								value={selectedBankAccount}
								label="Bank account"
								onChange={handleChangeBankAccount}
							>
								{bankAccounts.map((bankAccount) => (
									<MenuItem key={bankAccount.id} value={bankAccount.id}>
										{bankAccount.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					) : (
						<span>Loading</span>
					)}

					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DesktopDatePicker
							label="Date"
							inputFormat="DD/MM/YYYY"
							value={selectedDate}
							onChange={handleChangeDate}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>
					{categories ? (
						<FormControl fullWidth>
							<InputLabel>Category</InputLabel>
							<Select
								value={selectedCategory}
								label="Category"
								onChange={handleChangeCategory}
							>
								{categories.map((category) => (
									<MenuItem key={category.id} value={category.id}>
										{category.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					) : (
						<span>Loading</span>
					)}

					<Button
						disabled={
							description === "" ||
							amount === "0" ||
							selectedBankAccount === "" ||
							!selectedDate ||
							selectedCategory === ""
						}
						onClick={handleSubmit}
					>
						Add
					</Button>
				</Stack>
			</DialogContent>
		</Dialog>
	);
};

export default AddTransactionDialog;
