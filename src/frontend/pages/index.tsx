import { Box, Divider } from "@mui/material";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import React, { createContext, useMemo, useState } from "react";
import DashTransactions from "../components/Dashboard/DashTransactions";
import TransactionsSummary from "../components/Dashboard/TransactionsSummary";
import DashMilestones from "../components/Dashboard/DashMilestones";
import DashBudgets from "../components/Dashboard/DashBudgets";
import DashAccounts from "../components/Dashboard/DashAccounts";

// Used to give context to transaction table
export const AddTransactionContext = createContext({
	addTransactionState: "",
	setAddTransactionState: (newState: string) => {},
});

const Home = () => {
	const [addTransactionState, setAddTransactionState] = useState("idle");

	const value = useMemo(
		() => ({ addTransactionState, setAddTransactionState }),
		[addTransactionState]
	);

	return (
		<AddTransactionContext.Provider value={value}>
			<Head>
				<title>Dashboard - CashFlow</title>
			</Head>
			<Sidebar>
				<Box
					sx={{
						padding: 5,
					}}
				>
					<TransactionsSummary />

					<DashTransactions />
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: {
							md: "row",
							xs: "column",
						},
						justifyContent: "space-around",
						padding: 5,
					}}
				>
					<Box
						sx={{ mr: { md: 1, xs: 0 }, mb: { md: 0, xs: 5 }, width: "100%" }}
					>
						<DashMilestones />
					</Box>
					<Box sx={{ ml: { md: 1, xs: 0 }, width: "100%" }}>
						<DashBudgets />
					</Box>
				</Box>

				<Box
					sx={{
						padding: 5,
					}}
				>
					<DashAccounts />
				</Box>
			</Sidebar>
		</AddTransactionContext.Provider>
	);
};

export default Home;
