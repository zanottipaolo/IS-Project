import Head from "next/head";
import Sidebar from "../components/Sidebar";

const MilestonesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Milestones - CashFlow</title>
      </Head>
      <Sidebar>Milestones</Sidebar>
    </>
  );
};

export default MilestonesPage;
