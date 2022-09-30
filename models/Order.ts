export type OrderType = 'buy' | 'sell';
type OrderStatus = 'open' | 'active' | 'completed';

interface Order {
    id: string;
    type: OrderType;
    asset: string;
    price: number;
    quantity: number;
    currency: string;
    securityDeposit: number;
    buyer: string | null;
    seller: string | null;
    status: OrderStatus;
    //createdOn: number;
}

export default Order;
