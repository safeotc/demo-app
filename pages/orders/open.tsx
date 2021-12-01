import React from 'react';
import type { NextPage } from 'next';
import { PageLayout } from '../_app';
import OrdersLayout from '../../layouts/OrdersLayout';
import OpenOrdersList from '../../sections/orders/open/OpenOrdersList';

const Open: NextPage & PageLayout = () => {
    return <OpenOrdersList />;
};

Open.Layout = OrdersLayout;

export default Open;
