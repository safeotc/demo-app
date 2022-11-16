import { DemoStep } from '../demo/useDemo';
import { StepStatus } from './Step';

const useCompletedSteps = (completedSteps: DemoStep[]) => {
    const getStepStatus = (step: DemoStep, prevStepStatus: StepStatus): StepStatus => {
        if (completedSteps.indexOf(step) >= 0) {
            return 'completed';
        }
        if (prevStepStatus !== 'completed') {
            return 'locked';
        }
        return 'waiting';
    };

    const connectCreateOrderWalletStatus = getStepStatus('connect_create_order_wallet', 'completed');
    const createOrderStatus = getStepStatus('create_order', connectCreateOrderWalletStatus);
    const disconnectWalletStatus = getStepStatus('disconnect_wallet', createOrderStatus);
    const connectAcceptOrderWalletStatus = getStepStatus('connect_accept_order_wallet', disconnectWalletStatus);
    const acceptOrderStatus = getStepStatus('accept_order', connectAcceptOrderWalletStatus);
    const simulateTGEStatus = getStepStatus('simulate_tge', acceptOrderStatus);
    const switchToSellerWalletStatus = getStepStatus('switch_to_seller_wallet', simulateTGEStatus);
    const sendTokensStatus = getStepStatus('send_tokens', switchToSellerWalletStatus);
    const disconnectSellerWalletStatus = getStepStatus('disconnect_seller_wallet', sendTokensStatus);
    const connectBuyerWalletStatus = getStepStatus('connect_buyer_wallet', disconnectSellerWalletStatus);

    return {
        connectCreateOrderWalletStatus,
        createOrderStatus,
        disconnectWalletStatus,
        connectAcceptOrderWalletStatus,
        acceptOrderStatus,
        simulateTGEStatus,
        switchToSellerWalletStatus,
        sendTokensStatus,
        disconnectSellerWalletStatus,
        connectBuyerWalletStatus,
    };
};

export default useCompletedSteps;
