import React from 'react';
import type { NextPage } from 'next';
import { PageLayout } from '../_app';
import OrdersLayout from '../../layouts/OrdersLayout';
import ComingSoon from '../../components/ComingSoon';

const Active: NextPage & PageLayout = () => {
    return <ComingSoon />;
};

Active.Layout = OrdersLayout;

export default Active;
