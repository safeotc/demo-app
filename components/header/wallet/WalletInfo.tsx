import { useContext } from 'react';
import { WalletContext } from '../../wallet/WalletProvider';
import ConnectButton from './ConnectButton';
import Network from './network/Network';
import OtcBalance from './otcBalance/OtcBalance';

const WalletInfo = () => {
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
