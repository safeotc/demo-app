import React from 'react';
import type { NextPage } from 'next';
import { PageLayout } from '../_app';
import OrdersLayout from '../../layouts/OrdersLayout';

const Completed: NextPage & PageLayout = () => {
    return <div className="o-box">TODO: Completed orders</div>;
};

Completed.Layout = OrdersLayout;

export default Completed;
