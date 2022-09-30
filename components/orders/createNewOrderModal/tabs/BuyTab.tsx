import React from 'react';
import { CURRENCIES } from '../../../../common/constants/currencies';
import Alert from '../../../alerts/Alert';
import PrimaryButton from '../../../forms/buttons/PrimaryButton';
import SecondaryButton from '../../../forms/buttons/SecondaryButton';
import Input from '../../../forms/Input';
import Select from '../../../forms/Select';
import FlatIcon from '../../../icons/FlatIcon';

const BuyTab: React.FC = () => {
    return (
        <div>
            <div className="u-margin-bottom">
                <Alert
                    type="info"
                    icon={<FlatIcon icon="info" />}
                    hideCloseButton={true}
                    content="This is just a test buying form to simulate the process of buying. There will be many diffrent order
                    types available when the app launches."
                    id="info-alert"
                />
            </div>

            <div className="u-margin-bottom">
                <Select
                    label="Token"
                    placeholder="Select a token"
                    options={CURRENCIES.map((c) => ({ value: c.symbol, label: c.name, icon: c.icon }))}
                    onChange={(newValue) => console.log(newValue)}
                />
            </div>

            <div className="u-margin-bottom">
                <Input label="Token contract" placeholder="0x..." />
            </div>

            <div className="u-margin-bottom">
                <Input label="Quantity" min={0} placeholder="Quantity" type="number" />
            </div>

            <div className="u-margin-bottom">
                <Input label="Price (USD)" min={0} placeholder="Price" type="number" />
            </div>

            <div className="u-margin-bottom">
                <Input label="Unlock (%)" min={0} max={100} placeholder="Unlock" type="number" />
            </div>

            <div className="u-margin-bottom-large">
                <Input label="Security deposit (USD)" min={0} placeholder="Security deposit" type="number" />
            </div>

            <div className="u-text-center">
                <PrimaryButton>Create buy order</PrimaryButton>
                <SecondaryButton onClick={() => console.log('TODO - reset field values')}>Clear fields</SecondaryButton>
            </div>
        </div>
    );
};

export default BuyTab;
