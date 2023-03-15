import { getMaker } from '../../../common/helpers/orders';
import Order from '../../../models/Order';
import InputTooltip from '../../forms/InputTooltip';
import cn from 'classnames';
import AddressLink from './AddressLink';

interface OrderInfoProps {
    order: Order;
}

const OrderInfo = ({ order }: OrderInfoProps) => {
    const statusClasses = cn('c-order-status', {
        'c-order-status__open': order.status === 'open',
        'c-order-status__active': order.status === 'active',
        'c-order-status__completed': order.status === 'completed',
    });

    return (
        <>
            <div className="c-order-info">
                <span className="c-order-info__label">Status</span>
                <p className="c-order-info__value">
                    <span className={statusClasses}>{order.status}</span>
                </p>
            </div>

            <div className="c-order-info">
                <span className="c-order-info__label">Maker</span>
                <div className="c-order-info__value">
                    <AddressLink address={getMaker(order)} noAddressText="Maker is not defined." />
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
                    Security deposit
                    <InputTooltip
                        content={<span className="u-text-normal">Value required to be deposited by a seller.</span>}
                    />
                </span>
                <p className="c-order-info__value">
                    {order.securityDeposit} {order.currency}
                </p>
            </div>

            <div className="c-order-info">
                <span className="c-order-info__label">
                    Total order value
                    <InputTooltip
                        content={<span className="u-text-normal">Value required to be deposited by a buyer.</span>}
                    />
                </span>
                <p className="c-order-info__value">
                    {order.totalDeposit} {order.currency}
                </p>
            </div>
        </>
    );
};

export default OrderInfo;
