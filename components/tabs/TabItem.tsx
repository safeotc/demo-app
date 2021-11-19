import React from 'react';
import cn from 'classnames';

interface TabItemProps {
    isActive: boolean;
}

const TabItem: React.FC<TabItemProps> = ({ isActive, children }) => {
    const tabItemClasses = cn('c-tabs__item', { 'c-tabs__item--active': isActive });

    return <li className={tabItemClasses}>{children}</li>;
};

export default TabItem;
