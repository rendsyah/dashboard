import Avatar from '@/components/Avatar';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Avatar size="small" name="Rendy Ferdiansyah" />
    </>
  );
};

export default HomePage;
