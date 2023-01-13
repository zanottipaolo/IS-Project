import { Box } from "@mui/material";
import Head from "next/head";
import React from "react";
import LoginCard from "../components/LoginCard";

const loginPage = () => {
  return (
    <>
      <Head>
        <title>Login - CashFlow</title>
      </Head>

      <LoginCard />
    </>
  );
};

export default loginPage;
