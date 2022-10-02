import React from 'react';
import OrdersLayout from '../../layouts/OrdersLayout';
import OpenOrdersList from '../../sections/orders/open/OpenOrdersList';
import { NextPageWithLayout } from '../_app';

const Open: NextPageWithLayout = () => {
    return <OpenOrdersList />;
};

Open.getLayout = OrdersLayout;

export default Open;
