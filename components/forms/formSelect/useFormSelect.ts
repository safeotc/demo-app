import { useField, useFormikContext } from 'formik';
import { NullableSelectValue } from '../Select';

type OnSelectValueChange = (newValue: NullableSelectValue) => void;

const useFormSelect = (name: string) => {
    const { isSubmitting } = useFormikContext();
    const [field, meta, helpers] = useField<string>(name);
    const { value: fieldValue, onBlur } = field;
    const { error, touched } = meta;
    const { setValue, setError } = helpers;

    const value = fieldValue || null;
    const onFocus = () => setError(undefined);
    const onChange: OnSelectValueChange = (newValue) => setValue(newValue || '');
    const errorMessage = !!error && touched ? error : undefined;

    return { value, errorMessage, touched, onFocus, onChange, onBlur, isSubmitting };
};

export default useFormSelect;
