import Order from '../../../models/Order';
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
                DETAILS
                <br />
                TODO
            </div>

            <div className="o-order__actions">
                ACTIONS
                <br />
                TODO
            </div>

            <div className="o-order__history">
                HISTORY
                <br />
                TODO
            </div>
        </div>
    );
};

export default LoadedOrder;
