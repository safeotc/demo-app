import Order from '../../../models/Order';
import OrderActions from './orderActions/OrderActions';
import OrderContractData from './orderContractData/OrderContractData';
import OrderHistory from './OrderHistory';
import OrderInfo from './OrderInfo';
import OrderNotFound from './OrderNotFound';
import OrderSubtitle from './OrderSubtitle';
import OrderTitle from './OrderTitle';

interface LoadedOrderProps {
    id: string;
    order: Order | null;
}

const LoadedOrder = ({ id, order }: LoadedOrderProps) => {
    if (!order) {
        return <OrderNotFound id={id} />;
    }

    return (
        <div className="o-order">
            <div className="o-order__title">
                <OrderTitle id={id} type={order.type} asset={order.asset} />
            </div>

            <div className="o-order__info">
                <OrderSubtitle text="Order Info" />
                <OrderInfo order={order} />
            </div>

            <div className="o-order__contract-state">
                <OrderSubtitle text="Contract data" />
                <OrderContractData order={order} />
            </div>

            <div className="o-order__actions">
                <OrderSubtitle text="Actions" />
                <OrderActions order={order} />
            </div>

            <div className="o-order__history">
                <OrderSubtitle text="History" />
                <OrderHistory history={order.history} />
            </div>
        </div>
    );
};

export default LoadedOrder;
