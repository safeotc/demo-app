import { useCallback } from 'react';
import EthereumIcon from '../icons/networks/EthereumIcon';
import BinanceSmartChainIcon from '../icons/networks/BinanceSmartChainIcon';
import PolygonIcon from '../icons/networks/PolygonIcon';
import useStateWithUpdate from '../../common/hooks/useStateWithUpdate';

export type Network = 'Ethereum' | 'Binance Smart Chain' | 'Polygon';

export const NETWORKS: { icon: JSX.Element; name: Network }[] = [
    { icon: <EthereumIcon />, name: 'Ethereum' },
    { icon: <BinanceSmartChainIcon />, name: 'Binance Smart Chain' },
    { icon: <PolygonIcon />, name: 'Polygon' },
];

export interface UseWalletData {
    isConnected: boolean;
    network: Network;
    address: string;
    otcBalance: string;
    connect: () => void;
    switchNetworks: (network: Network) => void;
}

const useWallet = (): UseWalletData => {
    const [walletData, , updateWalletData] = useStateWithUpdate<
        Pick<UseWalletData, 'network' | 'address' | 'otcBalance'>
    >({
        network: 'Ethereum',
        address: '',
        otcBalance: '7.243',
    });
    const { address, network, otcBalance } = walletData;
    const isConnected = !!address;

    const connect = useCallback(() => {
        !address && updateWalletData({ address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' });
    }, [address, updateWalletData]);

    const switchNetworks = useCallback(
        (network: Network) => {
            updateWalletData({ network });
        },
        [updateWalletData]
    );

    return { isConnected, network, address, otcBalance, connect, switchNetworks };
};

export default useWallet;
