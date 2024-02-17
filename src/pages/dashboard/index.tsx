import Layout from '@/components/Layout';

const DashboardPage = () => {
  return <div>test</div>;
};

DashboardPage.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default DashboardPage;
