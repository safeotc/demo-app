import React from 'react';
import PrimaryButton from '../../components/forms/PrimaryButton';
import SecondaryButton from '../../components/forms/SecondaryButton';
import FlatIcon from '../../components/icons/FlatIcon';

const Main: React.FC = () => {
    return (
        <main className="o-box u-margin-bottom-large">
            <PrimaryButton icon={<FlatIcon icon="search" />}>Click me!</PrimaryButton>
            <SecondaryButton icon={<FlatIcon icon="calendar" />}>Click me! Click me!</SecondaryButton>

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
        </main>
    );
};

export default Main;
