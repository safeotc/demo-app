import React from 'react';
import { useField, useFormikContext } from 'formik';
import { FromInputFormValue, ToInputFormValue } from './FormInput';

type OnInputValueChange = React.ChangeEventHandler<HTMLInputElement>;

const useFormInput = <FormValue>(
    name: string,
    toFormValue: ToInputFormValue<FormValue>,
    fromFormValue: FromInputFormValue<FormValue>
) => {
    const { isSubmitting } = useFormikContext();
    const [field, meta, helpers] = useField(name);
    const { value: fieldValue, onBlur } = field;
    const { error, touched } = meta;
    const { setValue } = helpers;

    const value = fromFormValue(fieldValue);
    const onChange: OnInputValueChange = (e) => setValue(toFormValue(e.target.value));
    const errorMessage = !!error && touched ? error : undefined;

    return { value, onChange, onBlur, errorMessage, isSubmitting };
};

export default useFormInput;
