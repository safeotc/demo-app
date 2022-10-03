import React from 'react';
import { useField } from 'formik';
import { FromInputFormValue, ToInputFormValue } from './FormInput';

type OnInputValueChange = React.ChangeEventHandler<HTMLInputElement>;

const useFormInput = <FormValue>(
    name: string,
    toFormValue: ToInputFormValue<FormValue>,
    fromFormValue: FromInputFormValue<FormValue>
) => {
    const [field, , helpers] = useField(name);
    const { value: fieldValue, onBlur } = field;
    const { setValue } = helpers;

    const value = fromFormValue(fieldValue);
    const onChange: OnInputValueChange = (e) => setValue(toFormValue(e.target.value));

    return { value, onChange, onBlur };
};

export default useFormInput;
