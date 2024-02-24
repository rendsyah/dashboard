import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';

const DashboardPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard App | Dashboard</title>
      </Head>
    </>
  );
};

DashboardPage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default DashboardPage;
