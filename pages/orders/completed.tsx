import React from 'react';
import OrdersLayout from '../../layouts/OrdersLayout';
import ComingSoon from '../../components/ComingSoon';
import { NextPageWithLayout } from '../_app';

const Completed: NextPageWithLayout = () => {
    return <ComingSoon />;
};

Completed.getLayout = OrdersLayout;

export default Completed;
