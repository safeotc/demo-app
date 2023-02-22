import React from 'react';
import OrdersLayout from '../../layouts/OrdersLayout';
import ActiveOrdersList from '../../sections/orders/active/ActiveOrdersList';
import { NextPageWithLayout } from '../_app';

const Active: NextPageWithLayout = () => {
    return <ActiveOrdersList />;
};

Active.getLayout = OrdersLayout;

export default Active;
