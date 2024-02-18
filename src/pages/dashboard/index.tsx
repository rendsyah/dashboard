import Layout from '@/components/Layout';
import Head from 'next/head';

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
