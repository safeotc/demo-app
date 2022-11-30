import Order from '../../../models/Order';
import OrderActions from './OrderActions';
import OrderHistory from './OrderHistory';
import OrderInfo from './OrderInfo';
import OrderNotFound from './OrderNotFound';
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
                <h3 className="o-order__subtitle">Info</h3>
                <OrderInfo />
            </div>

            <div className="o-order__actions">
                <h3 className="o-order__subtitle">Actions</h3>
                <OrderActions />
            </div>

            <div className="o-order__history">
                <h3 className="o-order__subtitle">History</h3>
                <OrderHistory history={[]} />
            </div>
        </div>
    );
};

export default LoadedOrder;
