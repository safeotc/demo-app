import { useCallback, useContext, useState } from 'react';
import { getOrderAcceptedText } from '../../../../../../common/helpers/orders';
import Order, { OrderHistory } from '../../../../../../models/Order';
import ordersRepository from '../../../../../../repositories/OrdersRepository';
import { AlertsContext } from '../../../../../alerts/AlertsProvider';
import { DemoContext } from '../../../../../demo/DemoProvider';
import { WalletContext } from '../../../../../wallet/WalletProvider';

const useAcceptOrderButton = (order: Order) => {
    const { address } = useContext(WalletContext);
    const [isLoading, setIsLoading] = useState(false);
    const { completedStepsUpdater, demoOrderUuids } = useContext(DemoContext);
    const { addWarningAlert } = useContext(AlertsContext);

    const isDemoOrder = demoOrderUuids.includes(order.id);
    const additionalButtonText = order.type === 'buy' ? 'Sell' : 'Buy';
    const buttonFlatIcon = order.type === 'buy' ? 'upload' : 'download';

    const acceptOrder = useCallback(async () => {
        if (isDemoOrder) {
            addWarningAlert('Demo orders are meant only for presentational purposes, they cannot be interacted with.');
            return;
        }

        setIsLoading(true);

        const updatedOrder = { ...order };
        updatedOrder.status = 'active';
        updatedOrder.type === 'buy' && (updatedOrder.seller = address);
        updatedOrder.type === 'sell' && (updatedOrder.buyer = address);
        const orderAcceptedDateTime = Date.now();
        const orderAcceptedText = getOrderAcceptedText(order.type, order.price, order.quantity, order.currency);
        const orderHistory: OrderHistory = [orderAcceptedDateTime, orderAcceptedText];
        updatedOrder.history.unshift(orderHistory);

        await ordersRepository.updateOrder(updatedOrder);
        completedStepsUpdater.onOrderAccepted(updatedOrder);
    }, [setIsLoading, addWarningAlert, isDemoOrder, order, address, completedStepsUpdater]);

    return { isLoading, additionalButtonText, buttonFlatIcon, acceptOrder };
};

export default useAcceptOrderButton;
