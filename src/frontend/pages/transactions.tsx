import Head from "next/head";
import Sidebar from "../components/Sidebar";

const TransactionsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Transactions - CashFlow</title>
      </Head>
      <Sidebar>Transactions</Sidebar>
    </>
  );
};

export default TransactionsPage;
