import React from 'react';
import { useField, useFormikContext } from 'formik';

type OnInputValueChange = React.ChangeEventHandler<HTMLInputElement>;

const useFormInput = (name: string) => {
    const { isSubmitting } = useFormikContext();
    const [field, meta, helpers] = useField<string>(name);
    const { value, onBlur } = field;
    const { error, touched } = meta;
    const { setValue } = helpers;

    const onChange: OnInputValueChange = (e) => setValue(e.target.value);
    const errorMessage = !!error && touched ? error : undefined;

    return { value, onChange, onBlur, errorMessage, isSubmitting };
};

export default useFormInput;
