import Order, { OrderType } from '../../models/Order';

export const getMaker = (order: Order) => {
    return (order.type === 'buy' ? order.buyer : order.seller) || '';
};

export const getMakerShortForm = (order: Order) => {
    const maker = getMaker(order);
    return getAdddressShortForm(maker);
};

export const getAdddressShortForm = (address: string) => {
    return address.length > 8
        ? `${address.substring(0, 6)}...${address.substring(address.length - 4, address.length)}`
        : address;
};

export const getDepositValues = (price: number, quantity: number): Record<OrderType, number> => ({
    buy: price * quantity,
    sell: (price * quantity) / 2,
});

export const getOrderCreatedText = (type: OrderType, price: number, quantity: number, currency: string) => {
    const depositValue = getDepositValues(price, quantity)[type];
    const orderCreatedText = 'Order was successfully created.';
    const makerText = type === 'buy' ? 'Buyer' : 'Seller';
    const depositTypeText = type === 'buy' ? 'total' : 'security';
    const depositText = `${makerText} made a ${depositTypeText} deposit of ${depositValue} ${currency}.`;
    return `${orderCreatedText} ${depositText}`;
};
