import { useCallback, useEffect } from 'react';
import useStateWithUpdate from '../../common/hooks/useStateWithUpdate';
import welcomeRepository from '../../repositories/WelcomeRepository';

export interface DemoWallet {
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
}

export const DEMO_WALLETS: DemoWallet[] = [
    { address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', otcBalance: '32711.243' },
    { address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', otcBalance: '23030.3211' },
];

const useDemo = (): UseDemoData => {
    const [{ wallet, wasWelcomeScreenDisplayed, completedSteps }, , updateDemoData] = useStateWithUpdate<
        Pick<UseDemoData, 'wallet' | 'wasWelcomeScreenDisplayed' | 'completedSteps'>
    >({
        wallet: DEMO_WALLETS[0],
        wasWelcomeScreenDisplayed: welcomeRepository.wasWelcomeDisplayed(),
        completedSteps: [],
    });

    const changeWallet = useCallback(
        (address: string) => {
            const wallet = DEMO_WALLETS.find((dM) => dM.address === address);
            updateDemoData({ wallet });
        },
        [updateDemoData]
    );

    const setWasWelcomeScreenDisplayed = useCallback(
        (wasWelcomeScreenDisplayed: boolean) => {
            updateDemoData({ wasWelcomeScreenDisplayed });
        },
        [updateDemoData]
    );

    useEffect(() => {
        welcomeRepository.setWasWelcomeDisplayed(wasWelcomeScreenDisplayed);
    }, [wasWelcomeScreenDisplayed]);

    return { wallet, wasWelcomeScreenDisplayed, changeWallet, setWasWelcomeScreenDisplayed, completedSteps };
};

export default useDemo;
