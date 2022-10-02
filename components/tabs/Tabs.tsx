import React from 'react';
import cn from 'classnames';

type TabsAlign = 'left' | 'center' | 'right';

interface TabsProps {
    align?: TabsAlign;
    children: React.ReactNode;
}

const Tabs = ({ children, align }: TabsProps) => {
    const ulClasses = cn('c-tabs', 'u-overflow-x-auto', {
        'c-tabs--left': align === 'left',
        'c-tabs--center': align === 'center',
        'c-tabs--right': align === 'right',
    });

    return <ul className={ulClasses}>{children}</ul>;
};

export default Tabs;
