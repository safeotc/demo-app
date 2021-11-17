import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { PageLayout } from '../_app';
import OrdersLayout from '../../layouts/OrdersLayout';
import BuyIcon from '../../components/icons/orders/BuyIcon';
import SellIcon from '../../components/icons/orders/SellIcon';
import Order from '../../models/Order';
import useStateWithUpdate from '../../common/hooks/useStateWithUpdate';
import ordersRepository from '../../repositories/OrdersRepository';

type OrdersFetchState = 'uninitialized' | 'loading' | 'finished';

interface OrdersState {
    fetchState: OrdersFetchState;
    orders: Order[];
}

const initialOrdersState: OrdersState = { fetchState: 'uninitialized', orders: [] };

const Open: NextPage & PageLayout = () => {
    const [{ fetchState, orders }, , updateOrdersState] = useStateWithUpdate<OrdersState>(initialOrdersState);

    useEffect(() => {
        updateOrdersState({ fetchState: 'loading' });

        let proceed = true;
        (async () => {
            const orders = await ordersRepository.getOpenOrders();
            proceed && updateOrdersState({ fetchState: 'finished', orders });
        })();

        () => {
            proceed = false;
        };
    }, [updateOrdersState]);

    switch (fetchState) {
        case 'uninitialized':
            return null;

        case 'loading':
            return <>Loading</>;

        case 'finished':
            return (
                <div className="o-box">
                    <div className="u-overflow-x-auto">
                        <table className="o-table o-table--small u-text-white-space-nowrap u-margin-bottom-none">
                            <thead>
                                <tr>
                                    <th className="u-text-center">Type</th>
                                    <th className="u-text-left">Asset</th>
                                    <th className="u-text-right">Price</th>
                                    <th className="u-text-right">Quantity</th>
                                    <th className="u-text-right">Total</th>
                                    <th className="u-text-right">Security deposit</th>
                                </tr>
                            </thead>

                            <tbody>
                                {orders.map((o) => (
                                    <tr key={o.id}>
                                        <td className="u-text-center">
                                            {o.type === 'buy' && <BuyIcon />}
                                            {o.type === 'sell' && <SellIcon />}
                                        </td>
                                        <td className="u-text-left">{o.asset}</td>
                                        <td className="u-text-right">
                                            {o.price} {o.currency}
                                        </td>
                                        <td className="u-text-right">{o.quantity}</td>
                                        <td className="u-text-right">
                                            {o.price * o.quantity} {o.currency}
                                        </td>
                                        <td className="u-text-right">
                                            {o.securityDeposit} {o.currency}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
    }
};

Open.Layout = OrdersLayout;

export default Open;
