import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/main.scss';
import useIsTabbingBodyClass from '../common/hooks/useIsTabbingBodyClass';
import AppLayout from '../layouts/AppLayout';
import Side from '../sections/app/Side';
import Content from '../sections/app/Content';
import Providers from '../components/Providers';
import { NextComponentType, NextPageContext } from 'next';
import PageWithLayout from '../layouts/PageLayout';
import Head from 'next/head';

export interface PageLayout {
    Layout?: React.ComponentType;
}

export interface AppWithLayoutProps extends AppProps {
    Component: NextComponentType<NextPageContext, any, {}> & PageLayout;
}

const SafeOTCApp: React.FC<AppWithLayoutProps> = (props) => {
    useIsTabbingBodyClass();

    return (
        <>
            <Head>
                <title>SafeOTC - first decentralized multi-chain OTC platform</title>
            </Head>

            <Providers>
                <AppLayout
                    sideContent={<Side />}
                    mainContent={
                        <Content>
                            <PageWithLayout {...props} />
                        </Content>
                    }
                />
            </Providers>
        </>
    );
};
export default SafeOTCApp;
