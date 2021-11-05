import React from 'react';
import PrimaryButton from '../forms/PrimaryButton';
import WalletIcon from '../icons/WalletIcon';

const WalletInfo: React.FC = () => {
    return <PrimaryButton icon={<WalletIcon />}>Connect</PrimaryButton>;
};

export default WalletInfo;
