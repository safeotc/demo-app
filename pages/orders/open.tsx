import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { PageLayout } from '../_app';
import OrdersLayout from '../../layouts/OrdersLayout';
import BuyIcon from '../../components/icons/orders/BuyIcon';
import SellIcon from '../../components/icons/orders/SellIcon';
import Order from '../../models/Order';
import useStateWithUpdate from '../../common/hooks/useStateWithUpdate';
import ordersRepository from '../../repositories/OrdersRepository';
import SkeletonScreenLoader from '../../components/loading/SkeletonScreenLoader';
import Table from '../../components/tables/Table';
import OpenOrdersSkeletonScreen from '../../components/orders/open/SkeletonScreen';

type OrdersFetchState = 'loading' | 'finished';

interface OrdersState {
    fetchState: OrdersFetchState;
    orders: Order[];
}

const initialOrdersState: OrdersState = { fetchState: 'loading', orders: [] };

const Open: NextPage & PageLayout = () => {
    const [{ fetchState, orders }, , updateOrdersState] = useStateWithUpdate<OrdersState>(initialOrdersState);

    useEffect(() => {
        let proceed = true;
        (async () => {
            const orders = await ordersRepository.getOpenOrders();
            proceed && updateOrdersState({ fetchState: 'finished', orders });
        })();

        return () => {
            proceed = false;
        };
    }, [updateOrdersState]);

    const isLoading = fetchState !== 'finished';

    return (
        <div className="o-box">
            <div className="u-overflow-x-auto">
                <SkeletonScreenLoader show={isLoading} skeleton={<OpenOrdersSkeletonScreen />}>
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
                </SkeletonScreenLoader>
            </div>
        </div>
    );
};

Open.Layout = OrdersLayout;

export default Open;
