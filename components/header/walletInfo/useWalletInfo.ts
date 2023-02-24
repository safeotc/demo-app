import { useCallback, useContext } from 'react';
import { DemoContext } from '../../demo/DemoProvider';
import { WalletContext } from '../../wallet/WalletProvider';

const useWalletInfo = () => {
    const { isConnected, otcBalance, address, network, connect, disconnect, switchNetworks } =
        useContext(WalletContext);

    const { wallet, completedStepsUpdater } = useContext(DemoContext);

    const connectWallet = useCallback(() => {
        connect(wallet);
        completedStepsUpdater.onConnected();
    }, [connect, wallet, completedStepsUpdater]);

    const disconnectWallet = useCallback(() => {
        disconnect();
        completedStepsUpdater.onDisconnected();
    }, [disconnect, completedStepsUpdater]);

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
