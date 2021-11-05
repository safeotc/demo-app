import React, { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: JSX.Element;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, icon, ...props }, ref) => {
    const propsClasses = props?.className || '';
    const buttonClasses = cn('c-button', propsClasses, {
        'c-button--disabled': !!props.disabled,
    });

    return (
        <button {...props} className={buttonClasses} ref={ref}>
            <span className="c-button__content">
                {!!icon && <span className="c-button__icon">{icon}</span>}
                <span className="c-button__text">{children}</span>
            </span>
        </button>
    );
});
Button.displayName = 'Button';

export default Button;
