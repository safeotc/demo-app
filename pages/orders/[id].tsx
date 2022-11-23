import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useStateWithUpdate from '../../common/hooks/useStateWithUpdate';
import Order from '../../models/Order';
import ordersRepository from '../../repositories/OrdersRepository';

type OrderFetchState = 'loading' | 'finished';

interface OrderState {
    fetchState: OrderFetchState;
    order: Order | null;
}

const initialOrderState: OrderState = { fetchState: 'loading', order: null };

const OrderPage: NextPage = () => {
    const router = useRouter();
    const id = router.query.id as string;

    const [{ fetchState, order }, , updateOrderState] = useStateWithUpdate<OrderState>(initialOrderState);
    const isLoading = fetchState !== 'finished';

    useEffect(() => {
        // next js pages system sometimes passes id as undefined
        // this prevents unnecessary code execution
        if (!id) {
            return;
        }

        // initial order retrieval
        let proceed = true;
        (async () => {
            const order = await ordersRepository.getOrderById(id);
            proceed && updateOrderState({ fetchState: 'finished', order });
        })();

        return () => {
            proceed = false;
        };
    }, [id, updateOrderState]);

    if (isLoading) {
        return <div className="o-box">Loading order data...</div>;
    }

    if (!order) {
        return <div className="o-box">Order with id &quot;{id}&quot; was not found.</div>;
    }

    return (
        <div className="o-box">
            <div style={{ wordBreak: 'break-all' }}>{JSON.stringify(order)}</div>
        </div>
    );
};

export default OrderPage;
