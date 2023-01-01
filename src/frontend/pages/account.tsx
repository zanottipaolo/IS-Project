import Head from "next/head";
import Sidebar from "../components/Sidebar";

const AccountPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Account - CashFlow</title>
      </Head>
      <Sidebar>Account</Sidebar>
    </>
  );
};

export default AccountPage;
