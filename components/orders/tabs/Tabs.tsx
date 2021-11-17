import Link from 'next/link';
import React from 'react';
import { ROUTE_ORDERS_ACTIVE, ROUTE_ORDERS_COMPLETED, ROUTE_ORDERS_OPEN } from '../../../common/constants/routes';
import TabItem from './TabItem';
import useTabs from './useTab';

const Tabs: React.FC = () => {
    const { isItemActive } = useTabs();

    return (
        <ul className="c-tabs">
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
        </ul>
    );
};

export default Tabs;
