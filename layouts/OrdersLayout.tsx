import React from 'react';
import Tabs from '../sections/orders/Tabs';

const OrdersLayout: React.FC = ({ children }) => {
    return (
        <>
            <Tabs />
            {children}
        </>
    );
};

export default OrdersLayout;
