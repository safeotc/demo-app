import React from 'react';
import { Formik, Form as FormikForm, FormikValues } from 'formik';

interface FormProps<InitialValues> {
    children: React.ReactNode;
    initialValues: InitialValues;
    onSubmit: (values: InitialValues) => void;
    validationSchema: object;
}

const Form = <InitialValues extends FormikValues>({
    children,
    initialValues,
    onSubmit,
    validationSchema,
}: FormProps<InitialValues>) => {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <FormikForm autoComplete="off">{children}</FormikForm>
        </Formik>
    );
};

export default Form;
