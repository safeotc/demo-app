import SkeletonScreenLoader from '../../../components/loading/SkeletonScreenLoader';
import OrdersTableSkeletonScreen from '../../../components/orders/table/OrdersTableSkeletonScreen';
import useCompletedOrdersList from './useCompletedOrdersList';
import OrdersTable from '../../../components/orders/table/OrdersTable';

const CompletedOrdersList = () => {
    const { isLoading, orders } = useCompletedOrdersList();

    return (
        <>
            <div className="o-box">
                <div className="u-overflow-x-auto">
                    <SkeletonScreenLoader show={isLoading} skeleton={<OrdersTableSkeletonScreen withActions={false} />}>
                        <OrdersTable orders={orders} withActions={false} />
                    </SkeletonScreenLoader>
                </div>
            </div>
        </>
    );
};

export default CompletedOrdersList;
