import React from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr/_internal';
import { SidebarContextProvider, UtilsContextProvider } from '@/contexts';
import { fetchSWR } from '@/libs/utils';
import { roboto } from '@/libs/font';
import '@/styles/globals.scss';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SWRConfig value={{ fetcher: fetchSWR }}>
      <UtilsContextProvider>
        <SidebarContextProvider>
          <main className={roboto.className}>{getLayout(<Component {...pageProps} />)}</main>
        </SidebarContextProvider>
      </UtilsContextProvider>
    </SWRConfig>
  );
};

export default App;
