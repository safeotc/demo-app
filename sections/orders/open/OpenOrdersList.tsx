import SkeletonScreenLoader from '../../../components/loading/SkeletonScreenLoader';
import OrdersTableSkeletonScreen from '../../../components/orders/table/OrdersTableSkeletonScreen';
import useOpenOrdersList from './useOpenOrdersList';
import OrdersTable from '../../../components/orders/table/OrdersTable';

const OpenOrdersList = () => {
    const { isLoading, orders } = useOpenOrdersList();

    return (
        <>
            <div className="o-box">
                <div className="u-overflow-x-auto">
                    <SkeletonScreenLoader show={isLoading} skeleton={<OrdersTableSkeletonScreen withActions={true} />}>
                        <OrdersTable orders={orders} withActions={true} />
                    </SkeletonScreenLoader>
                </div>
            </div>
        </>
    );
};

export default OpenOrdersList;
