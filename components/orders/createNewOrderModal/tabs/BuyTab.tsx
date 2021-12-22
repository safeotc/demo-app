import React from 'react';
import PrimaryButton from '../../../forms/buttons/PrimaryButton';
import SecondaryButton from '../../../forms/buttons/SecondaryButton';
import Input from '../../../forms/Input';

const BuyTab: React.FC = () => {
    return (
        <div>
            <div className="u-margin-bottom">
                <Input placeholder="Token" />
            </div>

            <div className="u-margin-bottom">
                <Input placeholder="Amount" type="number" />
            </div>

            <div className="u-margin-bottom">
                <Input placeholder="Price" type="number" />
            </div>

            <div className="u-margin-bottom">
                <Input placeholder="Unlock" type="number" />
            </div>

            <div className="u-margin-bottom">
                <Input placeholder="Token contract" />
            </div>

            <div className="u-margin-bottom-large">
                <Input placeholder="Deposit" type="number" />
            </div>

            <div className="u-text-center">
                <PrimaryButton>Create buy order</PrimaryButton>
                <SecondaryButton>Clear fields</SecondaryButton>
            </div>
        </div>
    );
};

export default BuyTab;
