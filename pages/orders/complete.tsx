import React from 'react';
import type { NextPage } from 'next';
import { PageLayout } from '../_app';
import OrdersLayout from '../../layouts/OrdersLayout';

const Complete: NextPage & PageLayout = () => {
    return <div className="o-box">Completed</div>;
};

Complete.Layout = OrdersLayout;

export default Complete;
