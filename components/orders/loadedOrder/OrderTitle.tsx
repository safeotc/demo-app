import { OrderType } from '../../../models/Order';
import BuyIcon from '../../icons/orders/BuyIcon';
import SellIcon from '../../icons/orders/SellIcon';

interface OrderTitleProps {
    id: string;
    type: OrderType;
    asset: string;
}

const OrderTitle = ({ id, type, asset }: OrderTitleProps) => {
    return (
        <div className="c-order-title">
            <div className="c-order-title__left">{type === 'buy' ? <BuyIcon /> : <SellIcon />}</div>
            <div className="c-order-title__right">
                <h1 className="c-order-title__asset">
                    {type === 'buy' ? 'Buy' : 'Sell'} {asset}
                </h1>
                <span className="c-order-title__id">ID: {id}</span>
            </div>
        </div>
    );
};

export default OrderTitle;
