import { useRouter } from 'next/router';
import { ROUTE_ORDERS } from '../../../common/constants/routes';
import Order from '../../../models/Order';
import InfoAlert from '../../alerts/types/InfoAlert';
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

    if (isDemoOrder) {
        return (
            <InfoAlert
                className="u-margin-top"
                id="demo-order-alert"
                content={
                    <>
                        Demo orders are meant only for presentational purposes, they cannot be interacted with.
                        <br />
                        Please create a new order in order to see additional functionalities.
                    </>
                }
            />
        );
    }

    if (!isConnected) {
        return (
            <InfoAlert
                id="order-actions-connect-wallet-alert"
                content="Please connect your wallet in order to execute actions."
            />
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
            <div>
                <SecondaryButton className="u-width-full" icon={<FlatIcon icon="angle-small-left" />} onClick={goBack}>
                    Go back
                </SecondaryButton>
            </div>
        </>
    );
};

export default OrderActions;
