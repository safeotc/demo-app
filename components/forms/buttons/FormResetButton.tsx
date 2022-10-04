import React from 'react';
import { ButtonProps } from './Button';
import { useFormikContext } from 'formik';
import SecondaryButton from './SecondaryButton';

const FormResetButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
    const { isSubmitting } = useFormikContext();

    return (
        <SecondaryButton {...props} disabled={isSubmitting} type="reset" ref={ref}>
            {children}
        </SecondaryButton>
    );
});

FormResetButton.displayName = 'FormResetButton';

export default FormResetButton;
