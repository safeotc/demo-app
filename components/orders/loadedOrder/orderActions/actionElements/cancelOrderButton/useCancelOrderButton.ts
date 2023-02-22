import { useRouter } from 'next/router';
import { useCallback, useContext, useState } from 'react';
import { ROUTE_ORDERS_OPEN } from '../../../../../../common/constants/routes';
import ordersRepository from '../../../../../../repositories/OrdersRepository';
import { AlertsContext } from '../../../../../alerts/AlertsProvider';
import { DemoContext } from '../../../../../demo/DemoProvider';

const useCancelOrderButton = (orderId: string) => {
    const [isLoading, setIsLoading] = useState(false);
    const { addSuccessAlert } = useContext(AlertsContext);
    const { completedStepsUpdater } = useContext(DemoContext);
    const { replace } = useRouter();

    const cancelOrder = useCallback(async () => {
        setIsLoading(true);

        await ordersRepository.removeOrder(orderId);
        addSuccessAlert('Order was canceled successfully.');

        completedStepsUpdater.onOrderCanceled(orderId);
        replace(ROUTE_ORDERS_OPEN);
    }, [orderId, setIsLoading, addSuccessAlert, completedStepsUpdater, replace]);

    return { isLoading, cancelOrder };
};

export default useCancelOrderButton;
