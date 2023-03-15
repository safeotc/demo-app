import { useCallback, useContext, useState } from 'react';
import Order, { OrderHistory } from '../../../../../../models/Order';
import { DemoContext } from '../../../../../demo/DemoProvider';
import ordersRepository from '../../../../../../repositories/OrdersRepository';
import { getTokensSentText } from '../../../../../../common/helpers/orders';

const useSendTokensButton = (order: Order) => {
    const [isLoading, setIsLoading] = useState(false);
    const { completedSteps, completedStepsUpdater } = useContext(DemoContext);

    const wereTokensDistributed = completedSteps.includes('simulate_tge');
    const showTokensNeedToBeDistributedAlert = !wereTokensDistributed;
    const isSendButtonDisabled = !wereTokensDistributed || isLoading;
    const showSuccessAlert = order.tokensSent;
    const showSendTokensButton = !order.tokensSent;

    const sendTokens = useCallback(async () => {
        setIsLoading(true);

        const updatedOrder = { ...order };
        updatedOrder.tokensSent = true;
        const tokensSentDateTime = Date.now();
        const tokensSentText = getTokensSentText(order.quantity, order.price, order.asset, order.currency);
        const orderHistory: OrderHistory = [tokensSentDateTime, tokensSentText];
        updatedOrder.history.unshift(orderHistory);

        await ordersRepository.updateOrder(updatedOrder);
        completedStepsUpdater.onTokensSent(updatedOrder);

        setIsLoading(false);
    }, [setIsLoading, order, completedStepsUpdater]);

    return {
        showSuccessAlert,
        showSendTokensButton,
        showTokensNeedToBeDistributedAlert,
        isSendButtonDisabled,
        isLoading,
        sendTokens,
    };
};

export default useSendTokensButton;
