import Order from '../../models/Order';

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

export const getTotalOrderValue = (order: Order) => order.price * order.quantity;
