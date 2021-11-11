import React, { HTMLAttributes } from 'react';
import cn from 'classnames';

interface ButtonTextProps extends HTMLAttributes<HTMLSpanElement> {}

const ButtonText: React.FC<ButtonTextProps> = ({ children, ...props }) => {
    const propsClasses = props?.className || '';
    const buttonTextClasses = cn('c-button__text', propsClasses);
    return (
        <span {...props} className={buttonTextClasses}>
            {children}
        </span>
    );
};

export default ButtonText;
