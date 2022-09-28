import React from 'react';
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
                    options={[
                        { value: 'ARBI', label: 'Arbitrum', icon: <i>arbi</i> },
                        { value: 'OP', label: 'Optimism', icon: <i>op</i> },
                        { value: 'ZkS', label: 'ZkSync', icon: <i>zks</i> },
                    ]}
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
