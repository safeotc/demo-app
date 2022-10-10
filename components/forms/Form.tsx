import React from 'react';
import { Formik, Form as FormikForm } from 'formik';
import { validateHelper } from '../../common/helpers/forms';

export type FormErrors<FormValues> = {
    [K in keyof FormValues]?: string;
};

interface FormHelpers {
    setSubmitting: (isSubmitting: boolean) => void;
}

export interface OnSubmit<FormValues extends {}> {
    (values: FormValues, formHelpers: FormHelpers): void | Promise<any>;
}

export type ValidationRules<FormValues extends {}> = {
    [K in keyof FormValues]?: ((values: FormValues[K]) => string | void)[];
};

interface FormProps<FormValues extends {}> {
    children: React.ReactNode;
    initialValues: FormValues;
    onSubmit: OnSubmit<FormValues>;
    validationRules?: ValidationRules<FormValues>;
}

const Form = <FormValues extends {}>({ children, initialValues, onSubmit, validationRules }: FormProps<FormValues>) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={!!validationRules ? (values) => validateHelper(values, validationRules) : undefined}
        >
            <FormikForm autoComplete="off" noValidate={true}>
                {children}
            </FormikForm>
        </Formik>
    );
};

export default Form;
