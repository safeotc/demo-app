import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import PrimaryButton from '../components/forms/PrimaryButton';
import FlatIcon from '../components/icons/FlatIcon';
import SecondaryButton from '../components/forms/SecondaryButton';
import Button from '../components/forms/Button';
import EthereumIcon from '../components/icons/networks/EthereumIcon';
import BinanceSmartChainIcon from '../components/icons/networks/BinanceSmartChainIcon';
import PolygonIcon from '../components/icons/networks/PolygonIcon';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>SafeOTC - first decentralized multi-chain OTC platform</title>
            </Head>

            <PrimaryButton icon={<FlatIcon icon="search" />}>Item</PrimaryButton>
            <SecondaryButton icon={<FlatIcon icon="calendar" />}>Click me! Click me!</SecondaryButton>
            <Button>Click me!</Button>

            <EthereumIcon />
            <BinanceSmartChainIcon />
            <PolygonIcon />

            <h1 className="u-margin-top">Trades</h1>
            <ul>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
            </ul>

            <h1>Offers</h1>
            <ul>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
            </ul>

            <h1>Test</h1>
            <ul>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
            </ul>

            <h1>Something else</h1>
            <ul>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
            </ul>
        </div>
    );
};

export default Home;
