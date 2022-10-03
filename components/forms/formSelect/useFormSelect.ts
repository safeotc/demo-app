import { useField } from 'formik';
import { NullableSelectValue } from '../Select';
import { FromSelectFormValue, ToSelectFormValue } from './FormSelect';

type OnSelectValueChange = (newValue: NullableSelectValue) => void;

const useFormSelect = <FormValue>(
    name: string,
    toFormValue: ToSelectFormValue<FormValue>,
    fromFormValue: FromSelectFormValue<FormValue>
) => {
    const [field, meta, helpers] = useField<FormValue>(name);
    const { value: fieldValue, onBlur } = field;
    const { error, touched } = meta;
    const { setValue } = helpers;

    const value = fromFormValue(fieldValue);
    const onChange: OnSelectValueChange = (newValue) => setValue(toFormValue(newValue));
    const errorMessage = !!error && touched ? error : undefined;

    return { value, errorMessage, touched, onChange, onBlur };
};

export default useFormSelect;
