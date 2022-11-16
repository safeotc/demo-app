import { DemoStep } from '../demo/useDemo';

const useCompletedSteps = (completedSteps: DemoStep[]) => {
    const isStepCompleted = (step: DemoStep) => completedSteps.indexOf(step) >= 0;

    const isConnectCreateOrderWalletCompleted = isStepCompleted('connect_create_order_wallet');
    const isCreateOrderCompleted = isStepCompleted('create_order');
    const isDisconnectWalletCompleted = isStepCompleted('disconnect_wallet');
    const isConnectAcceptOrderWalletCompleted = isStepCompleted('connect_accept_order_wallet');
    const isAcceptOrderCompleted = isStepCompleted('accept_order');
    const isSimulateTGECompleted = isStepCompleted('simulate_tge');
    const isSwitchToSellerWalletCompleted = isStepCompleted('switch_to_seller_wallet');
    const isSendTokensCompleted = isStepCompleted('send_tokens');
    const isDisconnectSellerWalletCompleted = isStepCompleted('disconnect_seller_wallet');
    const isConnectBuyerWalletCompleted = isStepCompleted('connect_buyer_wallet');

    return {
        isConnectCreateOrderWalletCompleted,
        isCreateOrderCompleted,
        isDisconnectWalletCompleted,
        isConnectAcceptOrderWalletCompleted,
        isAcceptOrderCompleted,
        isSimulateTGECompleted,
        isSwitchToSellerWalletCompleted,
        isSendTokensCompleted,
        isDisconnectSellerWalletCompleted,
        isConnectBuyerWalletCompleted,
    };
};

export default useCompletedSteps;
