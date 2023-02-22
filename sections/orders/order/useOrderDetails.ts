import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useStateWithUpdate from '../../../common/hooks/useStateWithUpdate';
import Order from '../../../models/Order';
import ordersRepository, { OrdersUpdatedCallback } from '../../../repositories/OrdersRepository';

type OrderFetchState = 'loading' | 'finished';

interface OrderState {
    fetchState: OrderFetchState;
    order: Order | null;
}

const initialOrderState: OrderState = { fetchState: 'loading', order: null };

const useOrderDetails = () => {
    const [{ fetchState, order }, , updateOrderState] = useStateWithUpdate<OrderState>(initialOrderState);
    const isLoading = fetchState !== 'finished';

    const router = useRouter();
    const id = router.query.id as string;

    useEffect(() => {
        // next js pages system sometimes passes id as undefined
        // this prevents unnecessary code execution
        if (!id) {
            return;
        }

        // subscribe to orders updates
        const onOrdersUpdated: OrdersUpdatedCallback = (orders) => {
            const order = orders.find((o) => o.id === id);
            if (!order) {
                return;
            }
            updateOrderState({ order });
        };
        const subscriptionId = ordersRepository.subscribeToOrdersUpdate(onOrdersUpdated);

        // initial order retrieval
        let proceed = true;
        (async () => {
            const order = await ordersRepository.getOrderById(id);
            proceed && updateOrderState({ fetchState: 'finished', order });
        })();

        return () => {
            proceed = false;
            ordersRepository.unsubscribeFromOrdersUpdate(subscriptionId);
        };
    }, [id, updateOrderState]);

    return { id, isLoading, order };
};

export default useOrderDetails;
