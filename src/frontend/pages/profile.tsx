import Head from "next/head";
import Sidebar from "../components/Sidebar";

const AccountPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Profile - CashFlow</title>
      </Head>
      <Sidebar>Profile</Sidebar>
    </>
  );
};

export default AccountPage;
