import Order from '../../../../models/Order';
import CancelOrderButton from './actionElements/cancelOrderButton/CancelOrderButton';
import DemoAlert from './actionElements/DemoAlert';
import GoBackButton from './actionElements/goBackButton/GoBackButton';
import NotConnectedAlert from './actionElements/NotConnectedAlert';
import useOrderActions from './useOrderActions';

interface OrderActionsProps {
    order: Order;
}

const OrderActions = ({ order }: OrderActionsProps) => {
    const actionToDisplay = useOrderActions(order);

    let actionElementClass: string;
    let actionElement: JSX.Element;
    switch (actionToDisplay) {
        case 'demoAlert':
            actionElementClass = 'u-margin-bottom';
            actionElement = <DemoAlert />;
            break;
        case 'notConnectedAlert':
            actionElementClass = 'u-margin-bottom';
            actionElement = <NotConnectedAlert />;
            break;
        case 'cancelOrder':
            actionElementClass = 'u-margin-bottom-small';
            actionElement = <CancelOrderButton orderId={order.id} />;
            break;
        default:
            throw new Error(`No such order action: ${actionToDisplay}`);
    }

    return (
        <>
            <div className={actionElementClass}>{actionElement}</div>
            <div>
                <GoBackButton />
            </div>
        </>
    );
};

export default OrderActions;
