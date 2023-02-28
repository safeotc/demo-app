import { getOrderAction } from '../../../../common/helpers/orders';
import Order from '../../../../models/Order';
import { DEMO_ORDER_UUIDS } from '../../../demo/useDemo';
import useWalletInfo from '../../../header/walletInfo/useWalletInfo';

const useOrderActions = (order: Order) => {
    const isDemoOrder = DEMO_ORDER_UUIDS.includes(order.id);
    const { isConnected, address } = useWalletInfo();
    const actionToDisplay = getOrderAction(isDemoOrder, isConnected, address, order);
    return actionToDisplay;
};

export default useOrderActions;
