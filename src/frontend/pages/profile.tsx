import Head from "next/head";
import ProfileInfo from "../components/ProfileInfo";
import Sidebar from "../components/Sidebar";

const ProfilePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Profile - CashFlow</title>
      </Head>
      <Sidebar>
        <ProfileInfo />
      </Sidebar>
    </>
  );
};

export default ProfilePage;
