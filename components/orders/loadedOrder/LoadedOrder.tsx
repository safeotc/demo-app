import Order from '../../../models/Order';
import OrderActions from './OrderActions';
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
                <OrderSubtitle text="Info" />
                <OrderInfo />
            </div>

            <div className="o-order__actions">
                <OrderSubtitle text="Actions" />
                <OrderActions />
            </div>

            <div className="o-order__history">
                <OrderSubtitle text="History" />
                <OrderHistory history={[]} />
            </div>
        </div>
    );
};

export default LoadedOrder;
