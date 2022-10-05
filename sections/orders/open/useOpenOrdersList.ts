import { useEffect } from 'react';
import useStateWithUpdate from '../../../common/hooks/useStateWithUpdate';
import Order from '../../../models/Order';
import ordersRepository, { OrdersUpdatedCallback } from '../../../repositories/OrdersRepository';

type OrdersFetchState = 'loading' | 'finished';

interface OrdersState {
    fetchState: OrdersFetchState;
    orders: Order[];
}

const initialOrdersState: OrdersState = { fetchState: 'loading', orders: [] };

const useOpenOrdersList = () => {
    const [{ fetchState, orders }, , updateOrdersState] = useStateWithUpdate<OrdersState>(initialOrdersState);
    const isLoading = fetchState !== 'finished';

    // this effect triggers on mount/unmount
    useEffect(() => {
        const onOrdersUpdated: OrdersUpdatedCallback = (orders) => updateOrdersState({ orders });
        const subscriptionId = ordersRepository.subscribeToOrdersUpdate(onOrdersUpdated);
        return () => {
            ordersRepository.unsubscribeFromOrdersUpdate(subscriptionId);
        };
    }, [updateOrdersState]);

    useEffect(() => {
        let proceed = true;
        (async () => {
            const orders = await ordersRepository.getOpenOrders();
            proceed && updateOrdersState({ fetchState: 'finished', orders });
        })();

        return () => {
            proceed = false;
        };
    }, [updateOrdersState]);

    return { isLoading, orders };
};

export default useOpenOrdersList;
