import React from 'react';
import OrdersTabs from '../../components/orders/tabs/OrdersTabs';

const Tabs: React.FC = () => {
    return (
        <div className="u-overflow-x-auto u-margin-bottom-large">
            <OrdersTabs />
        </div>
    );
};

export default Tabs;
