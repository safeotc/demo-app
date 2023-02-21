import { OrderHistory } from '../../../../models/Order';
import useOrderHistory from './useOrderHistory';

interface OrderHistoryProps {
    history: OrderHistory[];
}

const OrderHistory = ({ history }: OrderHistoryProps) => {
    const { getFormattedDateFromTimestamp } = useOrderHistory();

    return (
        <div>
            {history.map(([timestamp, description], i) => (
                <div className="c-order-history" key={i}>
                    <span className="c-order-history__datetime">{getFormattedDateFromTimestamp(timestamp)}</span>
                    <p className="c-order-history__description">{description}</p>
                </div>
            ))}
        </div>
    );
};

export default OrderHistory;
