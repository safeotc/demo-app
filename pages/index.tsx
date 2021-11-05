import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Theme from '../components/theme/Theme';
import ContentWrapper from '../components/ContentWrapper';
import Side from '../sections/Side';
import Main from '../sections/Main';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>SafeOTC - first decentralized multi-chain OTC platform</title>
            </Head>

            <Theme>
                <ContentWrapper sideContent={<Side />} mainContent={<Main />} />
            </Theme>
        </>
    );
};

export default Home;
