import { useRouter } from 'next/router';
import { ROUTE_ORDERS } from '../../../common/constants/routes';
import Order from '../../../models/Order';
import InfoAlert from '../../alerts/types/InfoAlert';
import WarningAlert from '../../alerts/types/WarningAlert';
import { DEMO_ORDER_UUIDS } from '../../demo/useDemo';
import PrimaryButton from '../../forms/buttons/PrimaryButton';
import SecondaryButton from '../../forms/buttons/SecondaryButton';
import useWalletInfo from '../../header/wallet/walletInfo/useWalletInfo';
import FlatIcon from '../../icons/FlatIcon';

interface OrderActionsProps {
    order: Order;
}

const OrderActions = ({ order }: OrderActionsProps) => {
    const { isConnected } = useWalletInfo();
    const isDemoOrder = DEMO_ORDER_UUIDS.includes(order.id);
    const disableAccept = isDemoOrder;
    const router = useRouter();
    const goBack = () => router.push(ROUTE_ORDERS);

    const goBackButton = (
        <SecondaryButton className="u-width-full" icon={<FlatIcon icon="angle-small-left" />} onClick={goBack}>
            Go back
        </SecondaryButton>
    );

    if (isDemoOrder) {
        return (
            <>
                <WarningAlert
                    className="u-margin-bottom"
                    id="demo-order-alert"
                    content={
                        <>
                            Demo orders are meant only for presentational purposes, they cannot be interacted with.
                            <br />
                            Please create a new order to see additional functionalities.
                        </>
                    }
                />
                {goBackButton}
            </>
        );
    }

    if (!isConnected) {
        return (
            <>
                <InfoAlert
                    className="u-margin-bottom"
                    id="order-actions-connect-wallet-alert"
                    content="Please connect your wallet in order to execute actions."
                />
                {goBackButton}
            </>
        );
    }

    /*
    switch (order.status) {
        case 'open':
            // buyer connected, non buyed connected
            return <>open</>;
        case 'active':
            // buyer connected, seller connected, non-buyer seller connected
            return <>active</>;
        case 'completed':
            // buyer connected, seller connected
            return <>completed</>;
    }
    */

    return (
        <>
            <div className="u-margin-bottom-small">
                <PrimaryButton disabled={disableAccept} className="u-width-full" icon={<FlatIcon icon="check" />}>
                    Accept order
                </PrimaryButton>
            </div>
            <div>{goBackButton}</div>
        </>
    );
};

export default OrderActions;
