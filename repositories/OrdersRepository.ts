import { delay } from '../common/helpers/promises';
import Order from '../models/Order';
import { v4 as uuidV4 } from 'uuid';

interface IOrdersRepository {
    getOpenOrders: () => Promise<Order[]>;
    getActiveOrders: () => Promise<Order[]>;
    getCompletedOrders: () => Promise<Order[]>;
    getOrdersBy: (address: string) => Promise<Order[]>;
}

class OrdersRepository implements IOrdersRepository {
    orders: Order[];

    constructor() {
        this.orders = this.getInitialOrdersList();
    }

    getInitialOrdersList() {
        const orders: Order[] = [
            {
                id: uuidV4(),
                type: 'buy',
                asset: 'LUNA',
                currency: 'USDT',
                price: 66.32,
                quantity: 1000,
                securityDeposit: 20000,
                buyer: null,
                seller: null,
                status: 'open',
            },
            {
                id: uuidV4(),
                type: 'sell',
                asset: 'CERE',
                currency: 'USDT',
                price: 1.543,
                quantity: 500,
                securityDeposit: 340,
                buyer: null,
                seller: null,
                status: 'open',
            },
            {
                id: uuidV4(),
                type: 'buy',
                asset: 'ACALA',
                currency: 'USDT',
                price: 123.2344,
                quantity: 300,
                securityDeposit: 2500,
                buyer: null,
                seller: null,
                status: 'open',
            },
            {
                id: uuidV4(),
                type: 'buy',
                asset: 'LUNA',
                currency: 'USDT',
                price: 66.32,
                quantity: 1000,
                securityDeposit: 20000,
                buyer: null,
                seller: null,
                status: 'open',
            },
            {
                id: uuidV4(),
                type: 'sell',
                asset: 'CERE',
                currency: 'USDT',
                price: 1.543,
                quantity: 500,
                securityDeposit: 340,
                buyer: null,
                seller: null,
                status: 'open',
            },
            {
                id: uuidV4(),
                type: 'buy',
                asset: 'ACALA',
                currency: 'USDT',
                price: 123.2344,
                quantity: 300,
                securityDeposit: 2500,
                buyer: null,
                seller: null,
                status: 'open',
            },
            {
                id: uuidV4(),
                type: 'buy',
                asset: 'LUNA',
                currency: 'USDT',
                price: 66.32,
                quantity: 1000,
                securityDeposit: 20000,
                buyer: null,
                seller: null,
                status: 'open',
            },
            {
                id: uuidV4(),
                type: 'sell',
                asset: 'CERE',
                currency: 'USDT',
                price: 1.543,
                quantity: 500,
                securityDeposit: 340,
                buyer: null,
                seller: null,
                status: 'open',
            },
            {
                id: uuidV4(),
                type: 'buy',
                asset: 'ACALA',
                currency: 'USDT',
                price: 123.2344,
                quantity: 300,
                securityDeposit: 2500,
                buyer: null,
                seller: null,
                status: 'open',
            },
            {
                id: uuidV4(),
                type: 'buy',
                asset: 'LUNA',
                currency: 'USDT',
                price: 66.32,
                quantity: 1000,
                securityDeposit: 20000,
                buyer: null,
                seller: null,
                status: 'open',
            },
            {
                id: uuidV4(),
                type: 'sell',
                asset: 'CERE',
                currency: 'USDT',
                price: 1.543,
                quantity: 500,
                securityDeposit: 340,
                buyer: null,
                seller: null,
                status: 'open',
            },
            {
                id: uuidV4(),
                type: 'buy',
                asset: 'ACALA',
                currency: 'USDT',
                price: 123.2344,
                quantity: 300,
                securityDeposit: 2500,
                buyer: null,
                seller: null,
                status: 'open',
            },
        ];
        return orders;
    }

    async getOpenOrders() {
        await delay(2000);
        return this.orders;
    }

    async getActiveOrders() {
        await delay(2000);
        const activeOrders = this.orders.filter((o) => o.status === 'active');
        return activeOrders;
    }

    async getCompletedOrders() {
        await delay(2000);
        const completedOrders = this.orders.filter((o) => o.status === 'completed');
        return completedOrders;
    }

    async getOrdersBy(address: string) {
        await delay(2000);
        const addressInLowerCase = address.toLowerCase();
        const addressOrders = this.orders.filter(
            (o) => o.buyer?.toLowerCase() === addressInLowerCase || o.seller?.toLowerCase() === addressInLowerCase
        );
        return addressOrders;
    }
}

export default new OrdersRepository();
