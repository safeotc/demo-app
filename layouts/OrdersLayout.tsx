import React from 'react';
import CreateNew from '../sections/orders/CreateNew';
import Tabs from '../sections/orders/Tabs';

const OrdersLayout: React.FC = ({ children }) => {
    return (
        <>
            <div className="c-orders-toolbar u-margin-bottom-large">
                <Tabs />
                <CreateNew />
            </div>

            {children}
        </>
    );
};

export default OrdersLayout;
