import { useCallback } from 'react';
import useStateWithUpdate from '../../common/hooks/useStateWithUpdate';

export interface DemoWallet {
    address: string;
    otcBalance: string;
}

export interface UseDemoData {
    wallet: DemoWallet;
    changeWallet: (address: string) => void;
}

export const DEMO_WALLETS: DemoWallet[] = [
    { address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', otcBalance: '32711.243' },
    { address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', otcBalance: '23030.3211' },
];

const useDemo = (): UseDemoData => {
    const [{ wallet }, , updateDemoData] = useStateWithUpdate<Pick<UseDemoData, 'wallet'>>({ wallet: DEMO_WALLETS[0] });
    const changeWallet = useCallback(
        (address: string) => {
            const wallet = DEMO_WALLETS.find((dM) => dM.address === address);
            updateDemoData({ wallet });
        },
        [updateDemoData]
    );
    return { wallet, changeWallet };
};

export default useDemo;
