import React from 'react';
import cn from 'classnames';
import Button, { ButtonProps } from './Button';

const PrimaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
    const propsClasses = props?.className || '';
    const buttonClasses = cn('c-button--primary', propsClasses);

    return (
        <Button {...props} className={buttonClasses} ref={ref}>
            {children}
        </Button>
    );
});
PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
