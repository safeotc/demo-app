import React from 'react';
import cn from 'classnames';
import Button, { ButtonProps } from './Button';

interface SecondaryButtonProps extends ButtonProps {
    altBackground?: boolean;
}

const SecondaryButton = React.forwardRef<HTMLButtonElement, SecondaryButtonProps>(
    ({ children, altBackground, ...props }, ref) => {
        const propsClasses = props?.className || '';
        const buttonClasses = cn('c-button--secondary', propsClasses, {
            'c-button--alt-background': !!altBackground,
        });

        return (
            <Button {...props} className={buttonClasses} ref={ref}>
                {children}
            </Button>
        );
    }
);

SecondaryButton.displayName = 'SecondaryButton';

export default SecondaryButton;
