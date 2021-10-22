import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Main from '../sections/Main';
import Footer from '../sections/Footer';
import Nav from '../components/side/Nav';
import Theme from '../components/theme/Theme';
import Background from '../components/Background';
import Header from '../sections/Header';
import ContentWrapper from '../components/ContentWrapper';
import Logo from '../components/side/Logo';
import Side from '../sections/Side';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>SafeOTC - first decentralized multi-chain OTC platform</title>
            </Head>

            <Theme>
                <Background />
                <ContentWrapper
                    sideContent={<Side />}
                    mainContent={
                        <>
                            <Header />
                            <Main />
                            <Footer />
                        </>
                    }
                ></ContentWrapper>
            </Theme>
        </>
    );
};

export default Home;
