import React from 'react';
import cn from 'classnames';
import Button, { ButtonProps } from './Button';

const DangerButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
    const propsClasses = props?.className || '';
    const buttonClasses = cn('c-button--danger', propsClasses);
    const buttonType = props?.type || 'button';

    return (
        <Button {...props} type={buttonType} className={buttonClasses} ref={ref}>
            {children}
        </Button>
    );
});

DangerButton.displayName = 'DangerButton';

export default DangerButton;
