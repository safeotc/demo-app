import React, { InputHTMLAttributes } from 'react';
import cn from 'classnames';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ leftIcon, rightIcon, wrapperProps, ...props }, ref) => {
    const propsClasses = props?.className || '';
    const inputClasses = cn('c-input__field', propsClasses, {
        'c-input__field--with-left-icon': !!leftIcon,
        'c-input__field--with-right-icon': !!rightIcon,
    });

    const wrapperPropsClasses = wrapperProps?.className || '';
    const wrapperClasses = cn('c-input', wrapperPropsClasses);

    return (
        <div {...wrapperProps} className={wrapperClasses}>
            {!!leftIcon && <div className="c-input__left-icon">{leftIcon}</div>}
            <input {...props} className={inputClasses} ref={ref} />
            {!!rightIcon && <div className="c-input__right-icon">{rightIcon}</div>}
        </div>
    );
});

export default Input;
