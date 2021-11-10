import React from 'react';
import PrimaryButton from '../../forms/buttons/PrimaryButton';
import WalletIcon from '../../icons/WalletIcon';

interface ConnectButtonProps {
    connect: () => void;
}

const ConnectButton: React.FC<ConnectButtonProps> = ({ connect }) => {
    return (
        <PrimaryButton inlineOnMobile={true} icon={<WalletIcon />} onClick={connect}>
            Connect
        </PrimaryButton>
    );
};

export default ConnectButton;
