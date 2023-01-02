import Head from "next/head";
import DashTransactions from "../components/DashTransactions";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard - CashFlow</title>
      </Head>
      <Sidebar>
        Dashboard
        <DashTransactions />
      </Sidebar>
    </>
  );
}
