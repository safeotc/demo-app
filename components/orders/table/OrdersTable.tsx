import Link from 'next/link';
import { getMakerShortForm } from '../../../common/helpers/orders';
import Order from '../../../models/Order';
import BuyIcon from '../../icons/orders/BuyIcon';
import SellIcon from '../../icons/orders/SellIcon';
import Table from '../../table/Table';

interface OrdersTableProps {
    orders: Order[];
}

const OrdersTable = ({ orders }: OrdersTableProps) => {
    return (
        <Table
            highlightNewItems={true}
            size="small"
            singleLineItems={true}
            headerProps={[
                { textAlign: 'center', useMinPossibleWidth: true, content: 'Type' },
                { textAlign: 'center', useMinPossibleWidth: true, content: 'Details' },
                { textAlign: 'left', content: 'Asset' },
                { textAlign: 'right', content: 'Price' },
                { textAlign: 'right', content: 'Quantity' },
                { textAlign: 'right', content: 'Total' },
                { textAlign: 'right', content: 'Security deposit' },
                { textAlign: 'center', useMinPossibleWidth: true, content: 'Maker' },
            ]}
            data={orders}
            rowMapper={(order) => ({
                key: order.id,
                rowProps: [
                    {
                        textAlign: 'center',
                        content: (
                            <>
                                {order.type === 'buy' && <BuyIcon />}
                                {order.type === 'sell' && <SellIcon />}
                            </>
                        ),
                    },
                    {
                        textAlign: 'center',
                        content: (
                            <Link href={`/orders/${order.id}`}>
                                <a className="c-link">Details</a>
                            </Link>
                        ),
                    },
                    {
                        textAlign: 'left',
                        boldText: true,
                        content: order.asset,
                    },
                    {
                        textAlign: 'right',
                        content: `${order.price} ${order.currency}`,
                    },
                    {
                        textAlign: 'right',
                        content: order.quantity,
                    },
                    {
                        textAlign: 'right',
                        content: `${order.totalDeposit} ${order.currency}`,
                    },
                    {
                        textAlign: 'right',
                        content: `${order.securityDeposit} ${order.currency}`,
                    },
                    {
                        textAlign: 'center',
                        content: (
                            <a href="#" className="c-link" onClick={(e) => e.preventDefault()}>
                                {getMakerShortForm(order)}
                            </a>
                        ),
                    },
                ],
            })}
        />
    );
};

export default OrdersTable;
