import React from 'react';
import type { NextPage } from 'next';
import { PageLayout } from '../_app';
import OrdersLayout from '../../layouts/OrdersLayout';

const Open: NextPage & PageLayout = () => {
    return <div className="o-box">TODO: Open orders</div>;
};

Open.Layout = OrdersLayout;

export default Open;
