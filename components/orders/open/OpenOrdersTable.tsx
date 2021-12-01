import React from 'react';
import Order from '../../../models/Order';
import BuyIcon from '../../icons/orders/BuyIcon';
import SellIcon from '../../icons/orders/SellIcon';
import Table from '../../table/Table';

interface OpenOrdersTableProps {
    orders: Order[];
}

const OpenOrdersTable: React.FC<OpenOrdersTableProps> = ({ orders }) => {
    return (
        <Table
            size="small"
            singleLineItems={true}
            headerProps={[
                { textAlign: 'center', useMinPossibleWidth: true, content: 'Type' },
                { textAlign: 'left', content: 'Asset' },
                { textAlign: 'right', content: 'Price' },
                { textAlign: 'right', content: 'Quantity' },
                { textAlign: 'right', content: 'Total' },
                { textAlign: 'right', content: 'Security deposit' },
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
                        content: `${order.price * order.quantity} ${order.currency}`,
                    },
                    {
                        textAlign: 'right',
                        content: `${order.securityDeposit} ${order.currency}`,
                    },
                ],
            })}
        />
    );
};

export default OpenOrdersTable;
