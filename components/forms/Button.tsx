import React, { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import { ScreenSize } from '../../common/types';
import { getResponsiveClassnames } from '../../common/helpers';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: JSX.Element;
    iconOnly?: boolean;
    iconOnlyOn?: ScreenSize[];
    inlineOnMobile?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, icon, iconOnly, iconOnlyOn, inlineOnMobile, ...props }, ref) => {
        const propsClasses = props?.className || '';
        const buttonClasses = cn(
            'c-button',
            propsClasses,
            getResponsiveClassnames('c-button--icon-only', '-', iconOnlyOn),
            {
                'c-button--inline': !!inlineOnMobile,
                'c-button--icon-only': !!iconOnly,
            }
        );

        return (
            <button {...props} className={buttonClasses} ref={ref}>
                <span className="c-button__content">
                    {!!icon && <span className="c-button__icon">{icon}</span>}
                    {!!children && <span className="c-button__text">{children}</span>}
                </span>
            </button>
        );
    }
);
Button.displayName = 'Button';

export default Button;
