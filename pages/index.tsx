import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../sections/header';
import Main from '../sections/main';
import Footer from '../sections/footer';
import Layout from '../sections/layout';
import Nav from '../sections/nav';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>SafeOTC demo</title>
            </Head>

            <Layout>
                <Nav></Nav>
                <Main />
                <Footer />
            </Layout>
        </>
    );
};

export default Home;
