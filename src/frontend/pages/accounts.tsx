import { Box } from "@mui/material";
import Head from "next/head";
import DashAccounts from "../components/Dashboard/DashAccounts";
import Sidebar from "../components/Sidebar";

const AccountsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Accounts - CashFlow</title>
      </Head>
      <Sidebar>
        <Box
          sx={{
            padding: 5,
          }}
        >
          <DashAccounts />
        </Box>
      </Sidebar>
    </>
  );
};

export default AccountsPage;
