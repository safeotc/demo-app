import { useCallback } from 'react';
import useStateWithUpdate from '../../common/hooks/useStateWithUpdate';

interface DemoWallet {
    address: string;
    otcBalance: string;
}

const DEMO_WALLETS: DemoWallet[] = [
    { address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', otcBalance: '32711.243' },
    { address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', otcBalance: '23030.3211' },
];

export type NetworkId = 'Ethereum' | 'Binance Smart Chain' | 'Polygon';

export interface UseWalletData {
    isConnected: boolean;
    network: NetworkId;
    address: string;
    otcBalance: string;
    connect: (id: number) => void;
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
        (id: number) => {
            if (!!address) {
                return;
            }
            const { address: newAddress, otcBalance } = DEMO_WALLETS[id];
            updateWalletData({ address: newAddress, otcBalance });
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
