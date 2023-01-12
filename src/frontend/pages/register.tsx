import Head from 'next/head';
import React from 'react';
import RegisterCard from '../components/RegisterCard';

const register = () => {
    return (
      <>
        <Head>
          <title>Register - CashFlow</title>
        </Head>

        <RegisterCard />
      </>
    );
};

export default register;