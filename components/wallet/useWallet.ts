import { useCallback } from 'react';
import useStateWithUpdate from '../../common/hooks/useStateWithUpdate';

export type NetworkId = 'Ethereum' | 'Binance Smart Chain' | 'Polygon';

export interface Wallet {
    address: string;
    otcBalance: string;
}

export interface UseWalletData {
    isConnected: boolean;
    network: NetworkId;
    address: string;
    otcBalance: string;
    connect: (wallet: Wallet) => void;
    disconnect: () => void;
    switchNetworks: (network: NetworkId) => void;
}

const useWallet = (): UseWalletData => {
    const [walletData, , updateWalletData] = useStateWithUpdate<
        Pick<UseWalletData, 'network' | 'address' | 'otcBalance'>
    >({
        network: 'Ethereum',
        address: '',
        otcBalance: '0',
    });
    const { address, network, otcBalance } = walletData;
    const isConnected = !!address;

    const connect = useCallback(
        (wallet: Wallet) => {
            if (!!address) {
                return;
            }
            updateWalletData({ address: wallet.address, otcBalance: wallet.otcBalance });
        },
        [address, updateWalletData]
    );

    const disconnect = useCallback(() => updateWalletData({ address: '', otcBalance: '' }), [updateWalletData]);

    const switchNetworks = useCallback(
        (network: NetworkId) => {
            updateWalletData({ network });
        },
        [updateWalletData]
    );

    return { isConnected, network, address, otcBalance, connect, disconnect, switchNetworks };
};

export default useWallet;
