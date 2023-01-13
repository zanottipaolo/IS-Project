import { Box, Fab, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const TransactionsSummary = () => {
  return (
      <Box sx={{
          display: "flex",
          justifyContent: "space-between"
    }}>
      <Typography variant="h2" gutterBottom>
        € 20'300,50
      </Typography>
      <Fab color="primary" aria-label="add transaction">
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default TransactionsSummary;
