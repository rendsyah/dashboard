import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr/_internal';
import { fetchSWR } from '@/libs/utils';
import '@/styles/globals.scss';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <SWRConfig value={{ fetcher: fetchSWR }}>{getLayout(<Component {...pageProps} />)}</SWRConfig>;
}
