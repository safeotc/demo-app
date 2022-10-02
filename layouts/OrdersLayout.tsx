import React from 'react';
import { LayoutGetter } from '../pages/_app';
import CreateNew from '../sections/orders/createNew/CreateNew';
import Tabs from '../sections/orders/Tabs';

const OrdersLayout: LayoutGetter = (page) => {
    return (
        <>
            <div className="c-orders-toolbar u-margin-bottom-large">
                <Tabs />
                <CreateNew />
            </div>

            {page}
        </>
    );
};

export default OrdersLayout;
