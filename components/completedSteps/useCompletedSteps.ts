import { useCallback, useContext } from 'react';
import { DemoContext } from '../demo/DemoProvider';
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
    const simulateTgeStatus = getStepStatus('simulate_tge', acceptOrderStatus);
    const switchToSellerWalletStatus = getStepStatus('switch_to_seller_wallet', simulateTgeStatus);
    const sendTokensStatus = getStepStatus('send_tokens', switchToSellerWalletStatus);
    const disconnectSellerWalletStatus = getStepStatus('disconnect_seller_wallet', sendTokensStatus);
    const connectBuyerWalletStatus = getStepStatus('connect_buyer_wallet', disconnectSellerWalletStatus);

    const isSimuateTgeButtonDisabled = simulateTgeStatus !== 'waiting';
    const { completedStepsUpdater } = useContext(DemoContext);
    const simulateTge = useCallback(() => completedStepsUpdater.onSimulateTge(), [completedStepsUpdater]);

    return {
        connectCreateOrderWalletStatus,
        createOrderStatus,
        disconnectWalletStatus,
        connectAcceptOrderWalletStatus,
        acceptOrderStatus,
        simulateTgeStatus,
        switchToSellerWalletStatus,
        sendTokensStatus,
        disconnectSellerWalletStatus,
        connectBuyerWalletStatus,
        isSimuateTgeButtonDisabled,
        simulateTge,
    };
};

export default useCompletedSteps;
