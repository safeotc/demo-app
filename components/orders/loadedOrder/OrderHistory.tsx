import { OrderHistory } from '../../../models/Order';

interface OrderHistoryProps {
    history: OrderHistory[];
}

const OrderHistory = ({ history }: OrderHistoryProps) => {
    return (
        <div>
            {history.map(([timestamp, description], i) => (
                <div className="c-order-history" key={i}>
                    <span className="c-order-history__timestamp">{timestamp}</span>
                    <p className="c-order-history__description">{description}</p>
                </div>
            ))}
        </div>
    );
};

export default OrderHistory;
