import { useField, useFormikContext } from 'formik';
import { NullableSelectValue } from '../Select';

type OnSelectValueChange = (newValue: NullableSelectValue) => void;

const useFormSelect = (name: string) => {
    const { isSubmitting } = useFormikContext();
    const [field, meta, helpers] = useField<string>(name);
    const { value: fieldValue, onBlur } = field;
    const { error, touched } = meta;
    const { setValue } = helpers;

    const value = fieldValue || null;
    const onChange: OnSelectValueChange = (newValue) => setValue(newValue || '');
    const errorMessage = !!error && touched ? error : undefined;

    return { value, errorMessage, touched, onChange, onBlur, isSubmitting };
};

export default useFormSelect;
