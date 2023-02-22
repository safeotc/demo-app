import { getMakerShortForm, getTotalOrderValue } from '../../../../common/helpers/orders';
import Order from '../../../../models/Order';
import InputTooltip from '../../../forms/inputTooltip/InputTooltip';
import OrderStatusDisplay from './OrderStatusDisplay';

interface OrderInfoProps {
    order: Order;
}

const OrderInfo = ({ order }: OrderInfoProps) => {
    return (
        <>
            <div className="c-order-info">
                <span className="c-order-info__label">Status</span>
                <p className="c-order-info__value">
                    <OrderStatusDisplay status={order.status} />
                </p>
            </div>

            <div className="c-order-info">
                <span className="c-order-info__label">Maker</span>
                <div className="c-order-info__value">
                    <a href="#" className="c-link" onClick={(e) => e.preventDefault()}>
                        {getMakerShortForm(order)}
                    </a>
                </div>
            </div>

            <div className="c-order-info">
                <span className="c-order-info__label">Asset</span>
                <p className="c-order-info__value">{order.asset}</p>
            </div>

            <div className="c-order-info">
                <span className="c-order-info__label">Quantity</span>
                <p className="c-order-info__value">{order.quantity}</p>
            </div>

            <div className="c-order-info">
                <span className="c-order-info__label">Price</span>
                <p className="c-order-info__value">
                    {order.price} {order.currency}
                </p>
            </div>

            <div className="c-order-info">
                <span className="c-order-info__label">
                    Total value
                    <InputTooltip
                        content={<span className="u-text-normal">Value required to be deposited by a buyer.</span>}
                    />
                </span>
                <p className="c-order-info__value">
                    {getTotalOrderValue(order)} {order.currency}
                </p>
            </div>

            <div className="c-order-info">
                <span className="c-order-info__label">
                    Security deposit
                    <InputTooltip
                        content={<span className="u-text-normal">Value required to be deposited by a seller.</span>}
                    />
                </span>
                <p className="c-order-info__value">
                    {order.securityDeposit} {order.currency}
                </p>
            </div>
        </>
    );
};

export default OrderInfo;
