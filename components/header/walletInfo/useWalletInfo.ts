import { useCallback, useContext } from 'react';
import { DemoContext } from '../../demo/DemoProvider';
import { Wallet } from '../../wallet/useWallet';
import { WalletContext } from '../../wallet/WalletProvider';

const useWalletInfo = () => {
    const { isConnected, otcBalance, address, network, connect, disconnect, switchNetworks } =
        useContext(WalletContext);

    const { completedStepsUpdater } = useContext(DemoContext);

    const connectWallet = useCallback(
        (wallet: Wallet) => {
            connect(wallet);
            completedStepsUpdater.onConnected(wallet.address);
        },
        [connect, completedStepsUpdater]
    );

    const disconnectWallet = useCallback(() => {
        disconnect();
        completedStepsUpdater.onDisconnected(address);
    }, [disconnect, completedStepsUpdater, address]);

    return {
        isConnected,
        address,
        otcBalance,
        network,
        switchNetworks,
        connect: connectWallet,
        disconnect: disconnectWallet,
    };
};

export default useWalletInfo;
