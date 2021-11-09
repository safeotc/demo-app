import React, { useContext } from 'react';
import { WalletContext } from '../../wallet/WalletProvider';
import ConnectButton from './ConnectButton';
import OtcBalance from './OtcBalance';

const WalletInfo: React.FC = () => {
    const { isConnected, otcBalance, address, network, connect } = useContext(WalletContext);
    return isConnected ? <OtcBalance address={address} balance={otcBalance} /> : <ConnectButton connect={connect} />;
};

export default WalletInfo;
