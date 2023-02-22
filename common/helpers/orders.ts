import Order, { OrderType } from '../../models/Order';

export const getMaker = (order: Order) => {
    return (order.type === 'buy' ? order.buyer : order.seller) || '';
};

export const getMakerShortForm = (order: Order) => {
    let maker = getMaker(order);
    if (maker.length > 8) {
        maker = `${maker.substring(0, 6)}...${maker.substring(maker.length - 4, maker.length)}`;
    }
    return maker;
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
