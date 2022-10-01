import React from 'react';
import { Formik, Form as FormikForm, FormikValues } from 'formik';

interface FormProps<InitialValues> {
    children: React.ReactNode;
    initialValues: InitialValues;
    onSubmit: (values: InitialValues) => void;
}

const Form = <InitialValues extends FormikValues>({ children, initialValues, onSubmit }: FormProps<InitialValues>) => {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <FormikForm>{children}</FormikForm>
        </Formik>
    );
};

export default Form;
