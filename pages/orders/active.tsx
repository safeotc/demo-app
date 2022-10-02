import React from 'react';
import OrdersLayout from '../../layouts/OrdersLayout';
import ComingSoon from '../../components/ComingSoon';
import { NextPageWithLayout } from '../_app';

const Active: NextPageWithLayout = () => {
    return <ComingSoon />;
};

Active.getLayout = OrdersLayout;

export default Active;
