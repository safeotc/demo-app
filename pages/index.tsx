import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Index.module.scss';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>SafeOTC demo</title>
            </Head>

            <header>Here comes the header</header>

            <main>Here comes trading content</main>

            <footer>Here comes info about our shiiiiiiet</footer>
        </>
    );
};

export default Home;
