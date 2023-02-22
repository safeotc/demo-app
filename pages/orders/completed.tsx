import React from 'react';
import OrdersLayout from '../../layouts/OrdersLayout';
import CompletedOrdersList from '../../sections/orders/completed/CompletedOrdersList';
import { NextPageWithLayout } from '../_app';

const Completed: NextPageWithLayout = () => {
    return <CompletedOrdersList />;
};

Completed.getLayout = OrdersLayout;

export default Completed;
