import SkeletonScreenLoader from '../../../components/loading/SkeletonScreenLoader';
import LoadedOrder from '../../../components/orders/loadedOrder/LoadedOrder';
import OrderSkeletonScreen from '../../../components/orders/loadedOrder/OrderSkeletonScreen';
import useOrderDetails from './useOrderDetails';

const OrderDetails = () => {
    const { id, isLoading, order } = useOrderDetails();

    return (
        <div className="o-box">
            <SkeletonScreenLoader show={isLoading} skeleton={<OrderSkeletonScreen />}>
                <LoadedOrder id={id} order={order} />
            </SkeletonScreenLoader>
        </div>
    );
};

export default OrderDetails;
