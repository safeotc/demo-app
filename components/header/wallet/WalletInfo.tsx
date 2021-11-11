import React, { useContext } from 'react';
import { WalletContext } from '../../wallet/WalletProvider';
import ConnectButton from './ConnectButton';
import Network from './Network';
import OtcBalance from './OtcBalance';

const WalletInfo: React.FC = () => {
    const { isConnected, otcBalance, address, network, connect, switchNetworks } = useContext(WalletContext);
    return isConnected ? (
        <>
            <OtcBalance address={address} balance={otcBalance} />
            <Network network={network} switchNetwork={switchNetworks} />
        </>
    ) : (
        <ConnectButton connect={connect} />
    );
};

export default WalletInfo;