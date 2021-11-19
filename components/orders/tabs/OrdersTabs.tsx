import Link from 'next/link';
import React from 'react';
import { ROUTE_ORDERS_ACTIVE, ROUTE_ORDERS_COMPLETED, ROUTE_ORDERS_OPEN } from '../../../common/constants/routes';
import TabItem from '../../tabs/TabItem';
import Tabs from '../../tabs/Tabs';
import useOrdersTabs from './useOrdersTabs';

const OrdersTabs: React.FC = () => {
    const { isItemActive } = useOrdersTabs();

    return (
        <Tabs>
            <TabItem isActive={isItemActive('open')}>
                <Link href={ROUTE_ORDERS_OPEN}>
                    <a className="c-tabs__link">Open</a>
                </Link>
            </TabItem>

            <TabItem isActive={isItemActive('active')}>
                <Link href={ROUTE_ORDERS_ACTIVE}>
                    <a className="c-tabs__link">Active</a>
                </Link>
            </TabItem>

            <TabItem isActive={isItemActive('completed')}>
                <Link href={ROUTE_ORDERS_COMPLETED}>
                    <a className="c-tabs__link">Completed</a>
                </Link>
            </TabItem>
        </Tabs>
    );
};

export default OrdersTabs;
