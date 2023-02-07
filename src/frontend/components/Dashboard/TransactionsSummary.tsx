import { Box, Fab, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddTransactionDialog from "../../dialogs/AddTransactionDialog";

const TransactionsSummary = () => {
	const [addTransactionDialogOpen, setAddTransactionDialogOpen] =
		useState(false);

	const handleCloseAddTransactionDialog = () => {
		setAddTransactionDialogOpen(false);
	};

	const handleOpenAddTransactionDialog = () => {
		setAddTransactionDialogOpen(true);
	};

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
				<Typography variant="h2" gutterBottom>
					€ 20'300,50
				</Typography>
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
