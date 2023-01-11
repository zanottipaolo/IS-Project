import { Box } from "@mui/material";
import Head from "next/head";
import DashTransactions from "../components/Dashboard/DashTransactions";
import Sidebar from "../components/Sidebar";

const TransactionsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Transactions - CashFlow</title>
      </Head>
      <Sidebar>
        <Box
          sx={{
            padding: 5,
          }}
        >
          <DashTransactions />
        </Box>
      </Sidebar>
    </>
  );
};

export default TransactionsPage;
