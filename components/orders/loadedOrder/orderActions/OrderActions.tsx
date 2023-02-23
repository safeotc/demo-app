import Order from '../../../../models/Order';
import AcceptOrderButton from './actionElements/acceptOrderButton/AcceptOrderButton';
import AlreadyAcceptedAlert from './actionElements/AlreadyAcceptedAlert';
import CancelOrderButton from './actionElements/cancelOrderButton/CancelOrderButton';
import DemoAlert from './actionElements/DemoAlert';
import GoBackButton from './actionElements/goBackButton/GoBackButton';
import NotConnectedAlert from './actionElements/NotConnectedAlert';
import ClaimTokensButton from './actionElements/claimTokensButton/ClaimTokensButton';
import useOrderActions from './useOrderActions';
import SendTokensButton from './actionElements/sendTokensButton/SendTokensButton';

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
        case 'acceptOrder':
            actionElementClass = 'u-margin-bottom-small';
            actionElement = <AcceptOrderButton order={order} />;
            break;
        case 'alreadyAcceptedAlert':
            actionElementClass = 'u-margin-bottom-small';
            actionElement = <AlreadyAcceptedAlert />;
            break;
        case 'claimTokens':
            actionElementClass = 'u-margin-bottom-small';
            actionElement = <ClaimTokensButton />;
            break;
        case 'sendTokens':
            actionElementClass = 'u-margin-bottom-small';
            actionElement = <SendTokensButton />;
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
