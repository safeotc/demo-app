import React from 'react';
import { CURRENCIES } from '../../../../common/constants/currencies';
import PrimaryButton from '../../../forms/buttons/PrimaryButton';
import SecondaryButton from '../../../forms/buttons/SecondaryButton';
import Input from '../../../forms/Input';
import Select from '../../../forms/Select';

const BuyTab: React.FC = () => {
    return (
        <div>
            <div className="u-margin-bottom">
                <Select
                    placeholder="Select an asset"
                    options={CURRENCIES.map((c) => ({ value: c.symbol, label: c.name, icon: c.icon }))}
                    onChange={(newValue) => console.log(newValue)}
                />
            </div>

            <div className="u-margin-bottom">
                <Input min={0} placeholder="Amount" type="number" />
            </div>

            <div className="u-margin-bottom">
                <Input min={0} placeholder="Price" type="number" />
            </div>

            <div className="u-margin-bottom">
                <Input min={0} placeholder="Unlock" type="number" />
            </div>

            <div className="u-margin-bottom">
                <Input placeholder="Token contract" />
            </div>

            <div className="u-margin-bottom-large">
                <Input min={0} placeholder="Deposit" type="number" />
            </div>

            <div className="u-text-center">
                <PrimaryButton>Create buy order</PrimaryButton>
                <SecondaryButton>Clear fields</SecondaryButton>
            </div>
        </div>
    );
};

export default BuyTab;
