import Order from '../../../../models/Order';
import { DEMO_ORDER_UUIDS } from '../../../demo/useDemo';
import useWalletInfo from '../../../header/wallet/walletInfo/useWalletInfo';

type OrderAction =
    | 'demoAlert'
    | 'notConnectedAlert'
    | 'cancelOrder'
    | 'acceptOrder'
    | 'sendTokens'
    | 'claimTokens'
    | 'alreadyAcceptedAlert'
    | 'completedAlert';

const getOrderAction = (
    isDemoOrder: boolean,
    isConnected: boolean,
    connectedAddress: string,
    order: Order
): OrderAction => {
    if (isDemoOrder) {
        return 'demoAlert';
    }

    if (!isConnected) {
        return order.status === 'completed' ? 'completedAlert' : 'notConnectedAlert';
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

const useOrderActions = (order: Order) => {
    const isDemoOrder = DEMO_ORDER_UUIDS.includes(order.id);
    const { isConnected, address } = useWalletInfo();
    const actionToDisplay = getOrderAction(isDemoOrder, isConnected, address, order);
    return actionToDisplay;
};

export default useOrderActions;
