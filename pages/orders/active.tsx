import React from 'react';
import type { NextPage } from 'next';
import { PageLayout } from '../_app';
import OrdersLayout from '../../layouts/OrdersLayout';

const Active: NextPage & PageLayout = () => {
    return <div className="o-box">ACTIVE</div>;
};

Active.Layout = OrdersLayout;

export default Active;
