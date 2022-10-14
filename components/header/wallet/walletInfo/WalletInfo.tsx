import ConnectButton from '../ConnectButton';
import Network from '../network/Network';
import OtcBalance from '../otcBalance/OtcBalance';
import useWalletInfo from './useWalletInfo';

const WalletInfo = () => {
    const { isConnected, address, otcBalance, network, switchNetworks, connect, disconnect } = useWalletInfo();

    return isConnected ? (
        <>
            <OtcBalance address={address} balance={otcBalance} disconnect={disconnect} />
            <Network network={network} switchNetwork={switchNetworks} />
        </>
    ) : (
        <ConnectButton connect={connect} />
    );
};

export default WalletInfo;
