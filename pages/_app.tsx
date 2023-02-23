import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/main.scss';
import useIsTabbingBodyClass from '../common/hooks/useIsTabbingBodyClass';
import AppLayout from '../layouts/AppLayout';
import Side from '../sections/app/Side';
import Content from '../sections/app/Content';
import Providers from '../components/Providers';
import { NextPage } from 'next';
import Head from 'next/head';
import Welcome from '../components/welcome/Welcome';
import Congratulations from '../components/congratulations/Congratulations';

export type LayoutGetter = (page: React.ReactElement) => React.ReactNode;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: LayoutGetter;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

const getEmptyLayout: LayoutGetter = (page) => page;

const SafeOTCApp = ({ Component, pageProps }: AppPropsWithLayout) => {
    useIsTabbingBodyClass();

    const getLayout = Component.getLayout ?? getEmptyLayout;

    return (
        <>
            <Head>
                <title>SafeOTC - first decentralized multi-chain OTC platform</title>
            </Head>

            <Providers>
                <Welcome />
                <Congratulations />
                <AppLayout
                    sideContent={<Side />}
                    mainContent={<Content>{getLayout(<Component {...pageProps} />)}</Content>}
                />
            </Providers>
        </>
    );
};
export default SafeOTCApp;
