import { useCallback, useContext } from 'react';
import { DemoContext } from '../../../demo/DemoProvider';
import { WalletContext } from '../../../wallet/WalletProvider';

const useWalletInfo = () => {
    const { isConnected, otcBalance, address, network, connect, disconnect, switchNetworks } =
        useContext(WalletContext);
    const { wallet, finishStep } = useContext(DemoContext);
    const connectWallet = useCallback(() => {
        connect(wallet);
        finishStep(
            'connect_create_order_wallet',
            1,
            'You have successfully connected your wallet. Now make an OTC order.'
        );
    }, [wallet, connect, finishStep]);

    return { isConnected, address, otcBalance, network, switchNetworks, connect: connectWallet, disconnect };
};

export default useWalletInfo;
