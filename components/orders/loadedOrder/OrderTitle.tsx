import { OrderType } from '../../../models/Order';
import BuyIcon from '../../icons/orders/BuyIcon';
import SellIcon from '../../icons/orders/SellIcon';

interface OrderTitleProps {
    id: string;
    type: OrderType;
    asset: string;
}

const OrderTitle = ({ id, type, asset }: OrderTitleProps) => {
    const assetText = `${type === 'buy' ? 'Buy' : 'Sell'} ${asset}`;

    return (
        <div className="c-order-title">
            <div className="c-order-title__left">{type === 'buy' ? <BuyIcon /> : <SellIcon />}</div>
            <div className="c-order-title__right">
                <h1 className="c-order-title__asset" title={assetText}>
                    {assetText}
                    <span className="c-order-title__id">ID: {id}</span>
                </h1>
            </div>
        </div>
    );
};

export default OrderTitle;
