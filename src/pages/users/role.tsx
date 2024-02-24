import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import RoleComponent from '@/pagesComponents/Users/Role/Components';

const UsersPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard App | Role</title>
      </Head>
      <RoleComponent />
    </>
  );
};

UsersPage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default UsersPage;
