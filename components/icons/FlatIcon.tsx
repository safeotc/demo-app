import React, { HTMLAttributes } from 'react';
import cn from 'classnames';

interface FlatIconProps extends HTMLAttributes<HTMLElement> {
    icon: string;
}

const FlatIcon: React.FC<FlatIconProps> = ({ icon, ...props }) => {
    const propsClasses = !!props.className ? props.className : '';
    const iClasses = cn(`fi fi-br-${icon}`, propsClasses);
    return <i {...props} className={iClasses} />;
};

export default FlatIcon;
