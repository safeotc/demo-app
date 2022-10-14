import { useCallback, useContext } from 'react';
import { DemoContext } from '../../../demo/DemoProvider';
import { WalletContext } from '../../../wallet/WalletProvider';

const useWalletInfo = () => {
    const { isConnected, otcBalance, address, network, connect, switchNetworks } = useContext(WalletContext);
    const { wallet } = useContext(DemoContext);
    const connectWallet = useCallback(() => connect(wallet), [wallet, connect]);

    return { isConnected, address, otcBalance, network, switchNetworks, connectWallet };
};

export default useWalletInfo;
