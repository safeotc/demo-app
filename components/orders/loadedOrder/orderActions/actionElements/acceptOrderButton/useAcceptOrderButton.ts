import { useCallback, useContext, useState } from 'react';
import { getOrderAcceptedText } from '../../../../../../common/helpers/orders';
import Order, { OrderHistory } from '../../../../../../models/Order';
import ordersRepository from '../../../../../../repositories/OrdersRepository';
import { DemoContext } from '../../../../../demo/DemoProvider';
import { WalletContext } from '../../../../../wallet/WalletProvider';

const useAcceptOrderButton = (order: Order) => {
    const { address } = useContext(WalletContext);
    const [isLoading, setIsLoading] = useState(false);
    const { completedStepsUpdater } = useContext(DemoContext);

    const additionalButtonText = order.type === 'buy' ? 'Sell' : 'Buy';

    const acceptOrder = useCallback(async () => {
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
    }, [setIsLoading, order, address, completedStepsUpdater]);

    return { isLoading, additionalButtonText, acceptOrder };
};

export default useAcceptOrderButton;
