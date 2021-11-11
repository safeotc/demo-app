import { useCallback } from 'react';
import useStateWithUpdate from '../../common/hooks/useStateWithUpdate';

export type NetworkId = 'Ethereum' | 'Binance Smart Chain' | 'Polygon';

export interface UseWalletData {
    isConnected: boolean;
    network: NetworkId;
    address: string;
    otcBalance: string;
    connect: () => void;
    switchNetworks: (network: NetworkId) => void;
}

const useWallet = (): UseWalletData => {
    const [walletData, , updateWalletData] = useStateWithUpdate<
        Pick<UseWalletData, 'network' | 'address' | 'otcBalance'>
    >({
        network: 'Ethereum',
        address: '',
        otcBalance: '32711.243',
    });
    const { address, network, otcBalance } = walletData;
    const isConnected = !!address;

    const connect = useCallback(() => {
        !address && updateWalletData({ address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' });
    }, [address, updateWalletData]);

    const switchNetworks = useCallback(
        (network: NetworkId) => {
            updateWalletData({ network });
        },
        [updateWalletData]
    );

    return { isConnected, network, address, otcBalance, connect, switchNetworks };
};

export default useWallet;
