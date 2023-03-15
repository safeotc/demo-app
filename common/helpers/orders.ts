import Order, { OrderType } from '../../models/Order';

type OrderAction =
    | 'demoAlert'
    | 'notConnectedAlert'
    | 'cancelOrder'
    | 'acceptOrder'
    | 'sendTokens'
    | 'claimTokens'
    | 'alreadyAcceptedAlert'
    | 'completedAlert';

export const getOrderAction = (
    isDemoOrder: boolean,
    isConnected: boolean,
    connectedAddress: string,
    order: Order
): OrderAction => {
    if (!isConnected) {
        return order.status === 'completed' ? 'completedAlert' : 'notConnectedAlert';
    }

    if (isDemoOrder) {
        return 'demoAlert';
    }

    const isBuyer = connectedAddress === order.buyer;
    const isSeller = connectedAddress === order.seller;

    if (order.status === 'open') {
        const isMaker = (isBuyer && order.type === 'buy') || (isSeller && order.type === 'sell');
        return isMaker ? 'cancelOrder' : 'acceptOrder';
    }

    if (order.status === 'active') {
        return isBuyer ? 'claimTokens' : isSeller ? 'sendTokens' : 'alreadyAcceptedAlert';
    }

    return 'completedAlert';
};

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
    const depositText = `${makerText} made a deposit of ${depositValue} ${currency}.`;
    return `${orderCreatedText} ${depositText}`;
};

export const getOrderAcceptedText = (type: OrderType, price: number, quantity: number, currency: string) => {
    const depositValue = getDepositValues(price, quantity)[type === 'buy' ? 'sell' : 'buy'];
    const orderCreatedText = 'Order was accepted.';
    const makerText = type === 'buy' ? 'Seller' : 'Buyer';
    const depositText = `${makerText} made a deposit of ${depositValue} ${currency}.`;
    return `${orderCreatedText} ${depositText}`;
};

export const getTokensSentText = (quantity: number, price: number, asset: string, currency: string) => {
    const depositValue = getDepositValues(price, quantity);
    const totalValue = depositValue.buy + depositValue.sell;
    return `Seller sent ${quantity} ${asset} tokens to the smart contract and received ${totalValue} ${currency} in return.`;
};

export const getTokensClaimedText = (quantity: number, asset: string) => {
    return `Buyer claimed ${quantity} ${asset} from the smart contract.`;
};
