import Head from "next/head";
import Sidebar from "../components/Sidebar";

const BudgetsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Budgets - CashFlow</title>
      </Head>
      <Sidebar>Budgets</Sidebar>
    </>
  );
};

export default BudgetsPage;
