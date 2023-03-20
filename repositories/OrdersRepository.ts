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
                vesting: 100,
                price: 1.4,
                quantity: 3200,
                securityDeposit: 2240,
                totalDeposit: 4480,
                buyer: '0x14d893f1d607832bba2d39e85e729df741514e06',
                seller: null,
                status: 'open',
                tokensSent: false,
                history: [[1673386480000, getOrderCreatedText('buy', 1.4, 3200, 'USDT')]],
            },
            {
                id: DEMO_ORDER_UUIDS[1],
                type: 'sell',
                asset: 'ZKSYNC',
                currency: 'USDT',
                vesting: 100,
                price: 0.19,
                quantity: 20000,
                securityDeposit: 1900,
                totalDeposit: 3800,
                buyer: null,
                seller: '0x14d893f1d607832bba2d39e85e729df741514e06',
                status: 'open',
                tokensSent: false,
                history: [[1673382470000, getOrderCreatedText('sell', 0.19, 20000, 'USDT')]],
            },
            {
                id: DEMO_ORDER_UUIDS[2],
                type: 'buy',
                asset: 'SUI NETWORK',
                currency: 'USDT',
                vesting: 100,
                price: 123.2344,
                quantity: 300,
                securityDeposit: 18485.16,
                totalDeposit: 36970.32,
                buyer: '0x14d893f1d607832bba2d39e85e729df741514e06',
                seller: null,
                status: 'open',
                tokensSent: false,
                history: [[1673372977000, getOrderCreatedText('buy', 123.2344, 300, 'USDT')]],
            },
            {
                id: DEMO_ORDER_UUIDS[3],
                type: 'buy',
                asset: 'CELESTIA',
                currency: 'USDT',
                vesting: 100,
                price: 66.32,
                quantity: 1000,
                securityDeposit: 33160,
                totalDeposit: 66320,
                buyer: '0x14d893f1d607832bba2d39e85e729df741514e06',
                seller: null,
                status: 'open',
                tokensSent: false,
                history: [[1673364965000, getOrderCreatedText('buy', 66.32, 1000, 'USDT')]],
            },
            {
                id: DEMO_ORDER_UUIDS[4],
                type: 'sell',
                asset: 'ARBITRUM',
                currency: 'USDT',
                vesting: 100,
                price: 1.7,
                quantity: 5000,
                securityDeposit: 4250,
                totalDeposit: 8500,
                buyer: null,
                seller: '0x14d893f1d607832bba2d39e85e729df741514e06',
                status: 'open',
                tokensSent: false,
                history: [[1673362940000, getOrderCreatedText('sell', 1.7, 5000, 'USDT')]],
            },
            {
                id: DEMO_ORDER_UUIDS[5],
                type: 'sell',
                asset: 'ARBITRUM',
                currency: 'USDT',
                vesting: 100,
                price: 1.5,
                quantity: 10000,
                securityDeposit: 7500,
                totalDeposit: 15000,
                buyer: null,
                seller: '0x14d893f1d607832bba2d39e85e729df741514e06',
                status: 'open',
                tokensSent: false,
                history: [[1673352935000, getOrderCreatedText('sell', 1.5, 10000, 'USDT')]],
            },
            {
                id: DEMO_ORDER_UUIDS[6],
                type: 'buy',
                asset: 'ZKSYNC',
                currency: 'USDT',
                vesting: 100,
                price: 0.22,
                quantity: 50000,
                securityDeposit: 5500,
                totalDeposit: 11000,
                buyer: '0x14d893f1d607832bba2d39e85e729df741514e06',
                seller: null,
                status: 'open',
                tokensSent: false,
                history: [[1673351941000, getOrderCreatedText('buy', 0.22, 50000, 'USDT')]],
            },
        ];
        return orders;
    }

    async getOpenOrders() {
        await delay(2000);
        const openOrders = this.orders.filter((o) => o.status === 'open');
        return openOrders;
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
