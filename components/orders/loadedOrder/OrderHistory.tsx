import { getFormattedDateFromTimestamp } from '../../../common/helpers/dates';
import { OrderHistory } from '../../../models/Order';

interface OrderHistoryProps {
    history: OrderHistory[];
}

const OrderHistory = ({ history }: OrderHistoryProps) => {
    return (
        <>
            {history.map(([timestamp, description], i) => (
                <div className="c-order-history" key={i}>
                    <span className="c-order-history__datetime">{getFormattedDateFromTimestamp(timestamp)}</span>
                    <p className="c-order-history__description">{description}</p>
                </div>
            ))}
        </>
    );
};

export default OrderHistory;
