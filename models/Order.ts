type OrderType = 'buy' | 'sell';

interface Order {
    id: string;
    type: OrderType;
    asset: string;
    price: number;
    quantity: number;
    currency: string;
    securityDeposit: number;
}

export default Order;
