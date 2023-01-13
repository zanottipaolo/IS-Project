import { Box } from "@mui/material";
import Head from "next/head";
import DashBudgets from "../components/Dashboard/DashBudgets";
import Sidebar from "../components/Sidebar";

const BudgetsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Budgets - CashFlow</title>
      </Head>
      <Sidebar>
        <Box
          sx={{
            padding: 5,
          }}
        >
          <DashBudgets />
        </Box>
      </Sidebar>
    </>
  );
};

export default BudgetsPage;
