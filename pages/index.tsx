import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Main from '../sections/main';
import Footer from '../sections/footer';
import Nav from '../sections/nav';
import Theme from '../components/theme';
import Background from '../components/background';
import Header from '../sections/header';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>SafeOTC demo</title>
            </Head>

            <Theme>
                <Background>
                    <Nav />
                    <Header />
                    <Main />
                    <Footer />
                </Background>
            </Theme>
        </>
    );
};

export default Home;
