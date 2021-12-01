import React from 'react';
import type { NextPage } from 'next';
import { PageLayout } from '../_app';
import OrdersLayout from '../../layouts/OrdersLayout';
import ComingSoon from '../../components/ComingSoon';

const Completed: NextPage & PageLayout = () => {
    return <ComingSoon />;
};

Completed.Layout = OrdersLayout;

export default Completed;
