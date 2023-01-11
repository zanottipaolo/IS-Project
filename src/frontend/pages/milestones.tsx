import { Box } from "@mui/material";
import Head from "next/head";
import DashMilestones from "../components/Dashboard/DashMilestones";
import Sidebar from "../components/Sidebar";

const MilestonesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Milestones - CashFlow</title>
      </Head>
      <Sidebar>
        <Box
          sx={{
            padding: 5,
          }}
        >
          <DashMilestones />
        </Box>
      </Sidebar>
    </>
  );
};

export default MilestonesPage;
