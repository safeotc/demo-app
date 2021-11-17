import React from 'react';
import type { NextPage } from 'next';
import { PageLayout } from '../_app';
import OrdersLayout from '../../layouts/OrdersLayout';
import BuyIcon from '../../components/icons/orders/BuyIcon';
import SellIcon from '../../components/icons/orders/SellIcon';

const Open: NextPage & PageLayout = () => {
    return (
        <div className="o-box">
            <table className="o-table o-table--small u-margin-bottom-none">
                <thead>
                    <tr>
                        <th style={{ width: '90px' }}>Type</th>
                        <th>Asset</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Security deposit</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="u-text-center">
                            <BuyIcon />
                        </td>
                        <td>LUNA</td>
                        <td>$40.34</td>
                        <td>123.23</td>
                        <td>$4971.0982</td>
                        <td>$2000.00</td>
                    </tr>
                    <tr>
                        <td className="u-text-center">
                            <SellIcon />
                        </td>
                        <td>LUNA</td>
                        <td>$40.34</td>
                        <td>123.23</td>
                        <td>$4971.0982</td>
                        <td>$2000.00</td>
                    </tr>
                    <tr>
                        <td className="u-text-center">
                            <BuyIcon />
                        </td>
                        <td>LUNA</td>
                        <td>$40.34</td>
                        <td>123.23</td>
                        <td>$4971.0982</td>
                        <td>$2000.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

Open.Layout = OrdersLayout;

export default Open;
