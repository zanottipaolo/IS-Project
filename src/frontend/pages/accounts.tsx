import Head from "next/head";
import Sidebar from "../components/Sidebar";

const AccountsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Accounts - CashFlow</title>
      </Head>
      <Sidebar>Accounts</Sidebar>
    </>
  );
};

export default AccountsPage;
