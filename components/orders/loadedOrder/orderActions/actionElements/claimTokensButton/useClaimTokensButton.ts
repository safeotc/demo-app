import { useCallback, useContext, useState } from 'react';
import { getTokensClaimedText } from '../../../../../../common/helpers/orders';
import Order, { OrderHistory } from '../../../../../../models/Order';
import { DemoContext } from '../../../../../demo/DemoProvider';
import ordersRepository from '../../../../../../repositories/OrdersRepository';

const useClaimTokensButton = (order: Order) => {
    const [isLoading, setIsLoading] = useState(false);
    const { completedSteps, completedStepsUpdater } = useContext(DemoContext);
    const wereTokensDistributed = completedSteps.includes('simulate_tge');
    const wereTokensSent = completedSteps.includes('send_tokens');
    const showTokensNeedToBeDistributedAlert = !wereTokensDistributed;
    const showTokensNeedToBeSentAlert = wereTokensDistributed && !wereTokensSent;
    const isClaimButtonDisabled = !wereTokensDistributed || !wereTokensSent || isLoading;
    const showClaimTokensButton = order.status !== 'completed';

    const claimTokens = useCallback(async () => {
        setIsLoading(true);

        const updatedOrder = { ...order };
        updatedOrder.status = 'completed';
        const tokensClaimedDateTime = Date.now();
        const tokensClaimedText = getTokensClaimedText(order.quantity, order.asset);
        const orderHistory: OrderHistory = [tokensClaimedDateTime, tokensClaimedText];
        updatedOrder.history.unshift(orderHistory);

        await ordersRepository.updateOrder(updatedOrder);
        completedStepsUpdater.onTokensClaimed(updatedOrder);
    }, [setIsLoading, order, completedStepsUpdater]);

    return {
        showClaimTokensButton,
        showTokensNeedToBeDistributedAlert,
        showTokensNeedToBeSentAlert,
        isClaimButtonDisabled,
        isLoading,
        claimTokens,
    };
};

export default useClaimTokensButton;
