import React from 'react';
import { Formik, Form as FormikForm, FormikValues, FormikHelpers } from 'formik';

export type OnSubmit<Values> = (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<any>;

interface FormProps<InitialValues> {
    children: React.ReactNode;
    initialValues: InitialValues;
    onSubmit: OnSubmit<InitialValues>;
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
            <FormikForm autoComplete="off" noValidate={true}>
                {children}
            </FormikForm>
        </Formik>
    );
};

export default Form;
