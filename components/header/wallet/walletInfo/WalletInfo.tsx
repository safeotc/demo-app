import ConnectButton from '../ConnectButton';
import Network from '../network/Network';
import OtcBalance from '../otcBalance/OtcBalance';
import useWalletInfo from './useWalletInfo';

const WalletInfo = () => {
    const { isConnected, address, otcBalance, network, switchNetworks, connectWallet } = useWalletInfo();

    return isConnected ? (
        <>
            <OtcBalance address={address} balance={otcBalance} />
            <Network network={network} switchNetwork={switchNetworks} />
        </>
    ) : (
        <ConnectButton connect={connectWallet} />
    );
};

export default WalletInfo;
