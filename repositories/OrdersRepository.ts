import { delay } from '../common/helpers/promises';
import Order from '../models/Order';
import { v4 as uuidV4 } from 'uuid';

interface IOrdersRepository {
    getOpenOrders: () => Promise<Order[]>;
    getActiveOrders: () => void;
    getCompletedOrders: () => void;
}

class OrdersRepository implements IOrdersRepository {
    async getOpenOrders() {
        await delay(2000);
        const openOrders: Order[] = [
            {
                id: uuidV4(),
                type: 'buy',
                asset: 'LUNA',
                currency: 'USDT',
                price: 66.32,
                quantity: 1000,
                securityDeposit: 20000,
            },
            {
                id: uuidV4(),
                type: 'sell',
                asset: 'CERE',
                currency: 'USDT',
                price: 1.543,
                quantity: 500,
                securityDeposit: 340,
            },
            {
                id: uuidV4(),
                type: 'buy',
                asset: 'ACALA',
                currency: 'USDT',
                price: 123.2344,
                quantity: 300,
                securityDeposit: 2500,
            },
            {
                id: uuidV4(),
                type: 'buy',
                asset: 'LUNA',
                currency: 'USDT',
                price: 66.32,
                quantity: 1000,
                securityDeposit: 20000,
            },
            {
                id: uuidV4(),
                type: 'sell',
                asset: 'CERE',
                currency: 'USDT',
                price: 1.543,
                quantity: 500,
                securityDeposit: 340,
            },
            {
                id: uuidV4(),
                type: 'buy',
                asset: 'ACALA',
                currency: 'USDT',
                price: 123.2344,
                quantity: 300,
                securityDeposit: 2500,
            },
        ];
        return openOrders;
    }

    getActiveOrders() {}

    getCompletedOrders() {}
}

export default new OrdersRepository();
