import React, { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import { ScreenSize } from '../../../common/types/screen';
import ButtonText from './ButtonText';
import { getResponsiveClassnames } from '../../../common/helpers/classnames';
import FlatIcon from '../../icons/FlatIcon';

type ButtonSize = 's';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: JSX.Element;
    iconOnly?: boolean;
    iconOnlyOn?: ScreenSize[];
    inlineOnMobile?: boolean;
    addChildrenWithoutWrapping?: boolean;
    loading?: boolean;
    size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { children, size, icon, iconOnly, iconOnlyOn, inlineOnMobile, addChildrenWithoutWrapping, loading, ...props },
        ref
    ) => {
        const propsClasses = props?.className || '';
        const buttonClasses = cn(
            'c-button',
            propsClasses,
            getResponsiveClassnames('c-button--icon-only', '-', iconOnlyOn),
            {
                'c-button--inline': !!inlineOnMobile,
                'c-button--icon-only': !!iconOnly,
                'c-button--small': size === 's',
            }
        );
        const buttonContentClasses = cn({
            'c-button__content': true,
            'c-button__content--loading': !!loading,
        });

        return (
            <button {...props} className={buttonClasses} ref={ref}>
                <span className={buttonContentClasses}>
                    {!!icon && <span className="c-button__icon">{icon}</span>}
                    {!!children && (!!addChildrenWithoutWrapping ? children : <ButtonText>{children}</ButtonText>)}
                </span>

                {!!loading && (
                    <span className="c-button__loading">
                        <FlatIcon icon="spinner" />
                    </span>
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
