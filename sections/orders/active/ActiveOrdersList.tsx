import SkeletonScreenLoader from '../../../components/loading/SkeletonScreenLoader';
import OrdersTableSkeletonScreen from '../../../components/orders/table/OrdersTableSkeletonScreen';
import useActiveOrdersList from './useActiveOrdersList';
import OrdersTable from '../../../components/orders/table/OrdersTable';

const ActiveOrdersList = () => {
    const { isLoading, orders } = useActiveOrdersList();

    return (
        <>
            <div className="o-box">
                <div className="u-overflow-x-auto">
                    <SkeletonScreenLoader show={isLoading} skeleton={<OrdersTableSkeletonScreen />}>
                        <OrdersTable orders={orders} />
                    </SkeletonScreenLoader>
                </div>
            </div>
        </>
    );
};

export default ActiveOrdersList;
