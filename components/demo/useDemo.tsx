import { useCallback } from 'react';
import useStateWithUpdate from '../../common/hooks/useStateWithUpdate';
import useProgress, { CompletedStepsUpdater } from './useProgress';
import useWelcomeScreen from './useWelcomeScreen';

export interface DemoWallet {
    name: string;
    address: string;
    otcBalance: string;
}

export type DemoStep =
    | 'connect_create_order_wallet'
    | 'create_order'
    | 'disconnect_wallet'
    | 'connect_accept_order_wallet'
    | 'accept_order'
    | 'simulate_tge'
    | 'switch_to_seller_wallet'
    | 'send_tokens'
    | 'disconnect_seller_wallet'
    | 'connect_buyer_wallet';

export interface UseDemoData {
    wallet: DemoWallet;
    changeWallet: (address: string) => void;
    wasWelcomeScreenDisplayed: boolean;
    setWasWelcomeScreenDisplayed: (wasWelcomeScreenDisplayed: boolean) => void;
    completedSteps: DemoStep[];
    completedStepsUpdater: CompletedStepsUpdater;
}

export const DEMO_WALLETS: DemoWallet[] = [
    { name: 'Demo wallet 1', address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', otcBalance: '32711.243' },
    { name: 'Demo wallet 2', address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', otcBalance: '23030.3211' },
];

const useDemo = (): UseDemoData => {
    const [{ wallet }, , updateDemoData] = useStateWithUpdate<Pick<UseDemoData, 'wallet'>>({
        wallet: DEMO_WALLETS[0],
    });

    const changeWallet = useCallback(
        (address: string) => {
            const wallet = DEMO_WALLETS.find((dM) => dM.address === address);
            updateDemoData({ wallet });
        },
        [updateDemoData]
    );

    const { wasWelcomeScreenDisplayed, setWasWelcomeScreenDisplayed } = useWelcomeScreen();

    const { completedSteps, completedStepsUpdater } = useProgress();

    return {
        wallet,
        wasWelcomeScreenDisplayed,
        changeWallet,
        setWasWelcomeScreenDisplayed,
        completedSteps,
        completedStepsUpdater,
    };
};

export default useDemo;
