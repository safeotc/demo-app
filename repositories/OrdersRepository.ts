import { delay } from '../common/helpers/promises';
import Order from '../models/Order';
import { v4 as uuidV4 } from 'uuid';

export type OrdersUpdatedCallback = (orders: Order[]) => void;

interface IOrdersRepository {
    addOrder: (order: Order) => Promise<void>;
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
                id: '766d8aa3-ff0d-4caf-a9f9-c2e40cf9ee6b',
                type: 'buy',
                asset: 'ARBITRUM',
                currency: 'USDT',
                price: 66.32,
                quantity: 1000,
                securityDeposit: 20000,
                buyer: '0x14d893f1d607832bba2d39e85e729df741514e06',
                seller: null,
                status: 'open',
                history: [[1673386470, 'Order was successfully created.']],
            },
            {
                id: '422df333-affc-4b1e-80cd-e5fac41368be',
                type: 'sell',
                asset: 'ZKSYNC',
                currency: 'USDT',
                price: 1.543,
                quantity: 500,
                securityDeposit: 340,
                buyer: null,
                seller: '0x14d893f1d607832bba2d39e85e729df741514e06',
                status: 'open',
                history: [[1673382470, 'Order was successfully created.']],
            },
            {
                id: 'af235995-991d-4197-8612-21cf72d974dc',
                type: 'buy',
                asset: 'SUI',
                currency: 'USDT',
                price: 123.2344,
                quantity: 300,
                securityDeposit: 2500,
                buyer: '0x14d893f1d607832bba2d39e85e729df741514e06',
                seller: null,
                status: 'open',
                history: [[1673372941, 'Order was successfully created.']],
            },
            {
                id: 'e216bb4b-6de1-49a8-a375-b81c04e72933',
                type: 'buy',
                asset: 'CELESTIA',
                currency: 'USDT',
                price: 66.32,
                quantity: 1000,
                securityDeposit: 20000,
                buyer: '0x14d893f1d607832bba2d39e85e729df741514e06',
                seller: null,
                status: 'open',
                history: [[1673364941, 'Order was successfully created.']],
            },
            {
                id: 'b73a8355-9a68-433a-aa48-3dceebf854cf',
                type: 'sell',
                asset: 'QUAI',
                currency: 'USDT',
                price: 1.543,
                quantity: 500,
                securityDeposit: 340,
                buyer: null,
                seller: '0x14d893f1d607832bba2d39e85e729df741514e06',
                status: 'open',
                history: [[1673362941, 'Order was successfully created.']],
            },
            {
                id: 'a9b24305-a87d-4c88-9341-9b8264b76b60',
                type: 'sell',
                asset: 'CERE',
                currency: 'USDT',
                price: 1.543,
                quantity: 500,
                securityDeposit: 340,
                buyer: null,
                seller: '0x14d893f1d607832bba2d39e85e729df741514e06',
                status: 'open',
                history: [[1673352941, 'Order was successfully created.']],
            },
            {
                id: 'f08042fc-fe52-471a-933d-ee8a3e9b56ba',
                type: 'buy',
                asset: 'ACALA',
                currency: 'USDT',
                price: 123.2344,
                quantity: 300,
                securityDeposit: 2500,
                buyer: '0x14d893f1d607832bba2d39e85e729df741514e06',
                seller: null,
                status: 'open',
                history: [[1673351941, 'Order was successfully created.']],
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
