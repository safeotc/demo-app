import Order from '../../models/Order';
import { Wallet } from '../wallet/useWallet';
import useButtonHightlighter from './useButtonHighlighter';
import useProgress, { CompletedStepsUpdater } from './useProgress';
import useTgeSimulation from './useTgeSimulation';

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
    | 'connect_buyer_wallet'
    | 'claim_tokens';

export interface UseDemoData {
    completedSteps: DemoStep[];
    completedStepsUpdater: CompletedStepsUpdater;
    order: Order | null;
    demoOrderUuids: string[];
    wasTgeSimulated: boolean;
    simulateTge: () => void;
    isDemoProgressButtonHighlighted: boolean;
    highlightDemoProgressButton: () => void;
    unhighlightDemoProgressButton: () => void;
}

export const DEMO_WALLETS: Wallet[] = [
    { address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', otcBalance: '32711.243' },
    { address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', otcBalance: '23030.3211' },
];

export const DEMO_ORDER_UUIDS = [
    '766d8aa3-ff0d-4caf-a9f9-c2e40cf9ee6b',
    '422df333-affc-4b1e-80cd-e5fac41368be',
    'af235995-991d-4197-8612-21cf72d974dc',
    'e216bb4b-6de1-49a8-a375-b81c04e72933',
    'b73a8355-9a68-433a-aa48-3dceebf854cf',
    'a9b24305-a87d-4c88-9341-9b8264b76b60',
    'f08042fc-fe52-471a-933d-ee8a3e9b56ba',
];

const useDemo = (): UseDemoData => {
    const { isDemoProgressButtonHighlighted, highlightDemoProgressButton, unhighlightDemoProgressButton } =
        useButtonHightlighter();
    const { completedSteps, completedStepsUpdater, order } = useProgress(highlightDemoProgressButton);
    const { wasTgeSimulated, simulateTge } = useTgeSimulation();

    return {
        completedSteps,
        completedStepsUpdater,
        order,
        demoOrderUuids: DEMO_ORDER_UUIDS,
        wasTgeSimulated,
        simulateTge,
        isDemoProgressButtonHighlighted,
        highlightDemoProgressButton,
        unhighlightDemoProgressButton,
    };
};

export default useDemo;
