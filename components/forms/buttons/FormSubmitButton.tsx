import React from 'react';
import { ButtonProps } from './Button';
import PrimaryButton from '../../forms/buttons/PrimaryButton';
import { useFormikContext } from 'formik';

const FormSubmitButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
    const { isSubmitting } = useFormikContext();

    return (
        <PrimaryButton {...props} disabled={isSubmitting} loading={isSubmitting} type="submit" ref={ref}>
            {children}
        </PrimaryButton>
    );
});

FormSubmitButton.displayName = 'FormSubmitButton';

export default FormSubmitButton;
