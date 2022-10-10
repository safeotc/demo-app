import React, { InputHTMLAttributes } from 'react';
import cn from 'classnames';
import Label, { LabelContent } from './Label';
import ErrorMessage from './ErrorMessage';
import InputTooltip from './inputTooltip/InputTooltip';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
    label?: LabelContent;
    errorMessage?: string;
    info?: JSX.Element | string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ info, label, leftIcon, rightIcon, wrapperProps, errorMessage, ...props }, ref) => {
        const propsClasses = props?.className || '';
        const inputClasses = cn('c-input__field', propsClasses, {
            'c-input__field--with-left-icon': !!leftIcon,
            'c-input__field--with-right-icon': !!rightIcon,
            'c-input__field--danger': !!errorMessage,
        });

        const wrapperPropsClasses = wrapperProps?.className || '';
        const wrapperClasses = cn('c-input', wrapperPropsClasses);

        return (
            <>
                {!!label && <Label danger={!!errorMessage} htmlFor={props.id} content={label} />}

                {!!info && <InputTooltip content={info} />}

                <div {...wrapperProps} className={wrapperClasses}>
                    {!!leftIcon && <div className="c-input__left-icon">{leftIcon}</div>}
                    <input {...props} className={inputClasses} ref={ref} />
                    {!!rightIcon && <div className="c-input__right-icon">{rightIcon}</div>}
                </div>

                {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </>
        );
    }
);

Input.displayName = 'Input';

export default Input;
