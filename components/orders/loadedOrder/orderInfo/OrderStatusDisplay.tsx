import { OrderStatus } from '../../../../models/Order';
import cn from 'classnames';

interface OrderStatusDisplayProps {
    status: OrderStatus;
}

const OrderStatusDisplay = ({ status }: OrderStatusDisplayProps) => {
    const statusClasses = cn('c-order-status', {
        'c-order-status__open': status === 'open',
        'c-order-status__active': status === 'active',
        'c-order-status__completed': status === 'completed',
    });

    return <span className={statusClasses}>{status}</span>;
};

export default OrderStatusDisplay;
