export type OrderType = 'buy' | 'sell';
export type OrderStatus = 'open' | 'active' | 'completed';
export type OrderHistory = [number, string];

interface Order {
    id: string;
    type: OrderType;
    asset: string;
    price: number;
    quantity: number;
    currency: string;
    totalDeposit: number;
    securityDeposit: number;
    buyer: string | null;
    seller: string | null;
    status: OrderStatus;
    history: OrderHistory[];
}

export default Order;
