import ConnectButton from '../connectButton/ConnectButton';
import Network from '../network/Network';
import ConnectedWallet from '../connectedWallet/ConnectedWallet';
import useWalletInfo from './useWalletInfo';

const WalletInfo = () => {
    const { isConnected, address, otcBalance, network, switchNetworks, connect, disconnect } = useWalletInfo();

    return isConnected ? (
        <>
            <ConnectedWallet address={address} balance={otcBalance} disconnect={disconnect} />
            <Network network={network} switchNetwork={switchNetworks} />
        </>
    ) : (
        <ConnectButton connect={connect} />
    );
};

export default WalletInfo;
