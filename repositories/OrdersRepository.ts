import { delay } from '../common/helpers/promises';
import Order from '../models/Order';
import { v4 as uuidV4 } from 'uuid';
import { DEMO_ORDER_UUIDS } from '../components/demo/useDemo';
import { getOrderCreatedText } from '../common/helpers/orders';

export type OrdersUpdatedCallback = (orders: Order[]) => void;

interface IOrdersRepository {
    addOrder: (order: Order) => Promise<void>;
    removeOrder: (orderId: string) => Promise<void>;
    updateOrder: (order: Order) => Promise<void>;
    getOpenOrders: () => Promise<Order[]>;
    getActiveOrders: () => Promise<Order[]>;
    getCompletedOrders: () => Promise<Order[]>;
    getOrdersByAddress: (address: string) => Promise<Order[]>;
    getOrderById: (id: string) => Promise<Order | undefined>;
    subscribeToOrdersUpdate: (callback: (orders: Order[]) => void) => string;
    unsubscribeFromOrdersUpdate: (subscriptionId: string) => void;
}

class OrdersRepository implements IOrdersRepository {
    orders: Order[];
    subscriptions: [OrdersUpdatedCallback, string][];

    constructor() {
        this.orders = this.getInitialOrdersList();
        this.subscriptions = [];
    }

    async addOrder(order: Order) {
        await delay(2000);
        this.orders.unshift(order);
        this.triggerSubscriptions();
    }

    async removeOrder(orderId: string) {
        await delay(2000);
        this.orders = this.orders.filter((o) => o.id !== orderId);
        this.triggerSubscriptions();
    }

    async updateOrder(order: Order) {
        await delay(2000);
        const orderIdx = this.orders.findIndex((o) => o.id === order.id);
        if (orderIdx < 0) {
            return;
        }
        this.orders[orderIdx] = order;
        this.triggerSubscriptions();
    }

    triggerSubscriptions() {
        this.subscriptions.forEach((s) => s[0](this.orders));
    }

    subscribeToOrdersUpdate(callback: OrdersUpdatedCallback) {
        const subscriptionId = uuidV4();
        this.subscriptions.push([callback, subscriptionId]);
        return subscriptionId;
    }

    unsubscribeFromOrdersUpdate(subscriptionId: string) {
        const subscriptionIdx = this.subscriptions.findIndex((s) => s[1] === subscriptionId);
        if (subscriptionIdx < 0) {
            return;
        }
        this.subscriptions.splice(subscriptionIdx, 1);
    }

    getInitialOrdersList() {
        const orders: Order[] = [
            {
                id: DEMO_ORDER_UUIDS[0],
                type: 'buy',
                asset: 'ARBITRUM',
                currency: 'USDT',
                price: 66.32,
                quantity: 1000,
                securityDeposit: 33160,
                totalDeposit: 66320,
                buyer: '0x14d893f1d607832bba2d39e85e729df741514e06',
                seller: null,
                status: 'open',
                history: [[1673386480000, getOrderCreatedText('buy', 66.32, 1000, 'USDT')]],
            },
            {
                id: DEMO_ORDER_UUIDS[1],
                type: 'sell',
                asset: 'ZKSYNC',
                currency: 'USDT',
                price: 1.543,
                quantity: 500,
                securityDeposit: 385.75,
                totalDeposit: 771.5,
                buyer: null,
                seller: '0x14d893f1d607832bba2d39e85e729df741514e06',
                status: 'open',
                history: [[1673382470000, getOrderCreatedText('sell', 1.543, 500, 'USDT')]],
            },
            {
                id: DEMO_ORDER_UUIDS[2],
                type: 'buy',
                asset: 'SUI',
                currency: 'USDT',
                price: 123.2344,
                quantity: 300,
                securityDeposit: 18485.16,
                totalDeposit: 36970.32,
                buyer: '0x14d893f1d607832bba2d39e85e729df741514e06',
                seller: null,
                status: 'open',
                history: [[1673372977000, getOrderCreatedText('buy', 123.2344, 300, 'USDT')]],
            },
            {
                id: DEMO_ORDER_UUIDS[3],
                type: 'buy',
                asset: 'CELESTIA',
                currency: 'USDT',
                price: 66.32,
                quantity: 1000,
                securityDeposit: 33160,
                totalDeposit: 66320,
                buyer: '0x14d893f1d607832bba2d39e85e729df741514e06',
                seller: null,
                status: 'open',
                history: [[1673364965000, getOrderCreatedText('buy', 66.32, 1000, 'USDT')]],
            },
            {
                id: DEMO_ORDER_UUIDS[4],
                type: 'sell',
                asset: 'QUAI',
                currency: 'USDT',
                price: 1.543,
                quantity: 500,
                securityDeposit: 385.75,
                totalDeposit: 771.5,
                buyer: null,
                seller: '0x14d893f1d607832bba2d39e85e729df741514e06',
                status: 'open',
                history: [[1673362940000, getOrderCreatedText('sell', 1.543, 500, 'USDT')]],
            },
            {
                id: DEMO_ORDER_UUIDS[5],
                type: 'sell',
                asset: 'CERE',
                currency: 'USDT',
                price: 1.543,
                quantity: 500,
                securityDeposit: 385.75,
                totalDeposit: 771.5,
                buyer: null,
                seller: '0x14d893f1d607832bba2d39e85e729df741514e06',
                status: 'open',
                history: [[1673352935000, getOrderCreatedText('sell', 1.543, 500, 'USDT')]],
            },
            {
                id: DEMO_ORDER_UUIDS[6],
                type: 'buy',
                asset: 'ACALA',
                currency: 'USDT',
                price: 123.2344,
                quantity: 300,
                securityDeposit: 18485.16,
                totalDeposit: 36970.32,
                buyer: '0x14d893f1d607832bba2d39e85e729df741514e06',
                seller: null,
                status: 'open',
                history: [[1673351941000, getOrderCreatedText('buy', 123.2344, 300, 'USDT')]],
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

    async getOrdersByAddress(address: string) {
        await delay(2000);
        const addressInLowerCase = address.toLowerCase();
        const addressOrders = this.orders.filter(
            (o) => o.buyer?.toLowerCase() === addressInLowerCase || o.seller?.toLowerCase() === addressInLowerCase
        );
        return addressOrders;
    }

    async getOrderById(id: string) {
        await delay(2000);
        const idInLowerCase = id.toLowerCase();
        const order = this.orders.find((o) => o.id.toLowerCase() === idInLowerCase);
        return order;
    }
}

export default new OrdersRepository();
