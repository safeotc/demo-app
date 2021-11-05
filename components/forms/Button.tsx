import React, { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: JSX.Element;
    inlineOnMobile?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, icon, inlineOnMobile, ...props }, ref) => {
    const propsClasses = props?.className || '';
    const buttonClasses = cn('c-button', propsClasses, {
        'c-button--inline': !!inlineOnMobile,
        'c-button--icon-only': !children,
    });

    return (
        <button {...props} className={buttonClasses} ref={ref}>
            <span className="c-button__content">
                {!!icon && <span className="c-button__icon">{icon}</span>}
                {!!children && <span className="c-button__text">{children}</span>}
            </span>
        </button>
    );
});
Button.displayName = 'Button';

export default Button;
