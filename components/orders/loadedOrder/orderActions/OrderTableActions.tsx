import Order from '../../../../models/Order';
import AcceptOrderTableButton from './actionElements/acceptOrderButton/AcceptOrderTableButton';
import CancelOrderTableButton from './actionElements/cancelOrderButton/CancelOrderTableButton';
import DemoTableAlert from './actionElements/demoAlert/DemoTableAlert';
import ClaimTokensTableButton from './actionElements/claimTokensButton/ClaimTokensTableButton';
import useOrderActions from './useOrderActions';
import SendTokensTableButton from './actionElements/sendTokensButton/SendTokensTableButton';
import NoActionTableElement from './actionElements/NoActionTableElement';

interface OrderTableActionsProps {
    order: Order;
}

const OrderTableActions = ({ order }: OrderTableActionsProps) => {
    const actionToDisplay = useOrderActions(order);

    let actionElement: JSX.Element;
    switch (actionToDisplay) {
        case 'notConnectedAlert':
            actionElement = <NoActionTableElement />;
            break;
        case 'demoAlert':
            actionElement = <DemoTableAlert order={order} />;
            break;
        case 'cancelOrder':
            actionElement = <CancelOrderTableButton orderId={order.id} />;
            break;
        case 'acceptOrder':
            actionElement = <AcceptOrderTableButton order={order} />;
            break;
        case 'alreadyAcceptedAlert':
            actionElement = <NoActionTableElement />;
            break;
        case 'sendTokens':
            actionElement = <SendTokensTableButton order={order} />;
            break;
        case 'claimTokens':
            actionElement = <ClaimTokensTableButton order={order} />;
            break;
        case 'completedAlert':
            actionElement = <NoActionTableElement />;
            break;
        default:
            throw new Error(`No such order action: ${actionToDisplay}`);
    }

    return actionElement;
};

export default OrderTableActions;
