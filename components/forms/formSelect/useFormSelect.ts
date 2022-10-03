import { useField } from 'formik';
import { SingleValue } from 'react-select';
import { SelectOption } from '../Select';
import { FromSelectFormValue, ToSelectFormValue } from './FormSelect';

type OnSelectValueChange = (newValue: SingleValue<SelectOption>) => void;

const useFormSelect = <FormValue>(
    name: string,
    toFormValue: ToSelectFormValue<FormValue>,
    fromFormValue: FromSelectFormValue<FormValue>
) => {
    const [field, meta, helpers] = useField<FormValue>(name);
    const { value: fieldValue, onBlur } = field;
    const { error } = meta;
    const { setValue } = helpers;

    console.log('error', error);

    const value = fromFormValue(fieldValue);
    const onChange: OnSelectValueChange = (newValue) => setValue(toFormValue(newValue));

    return { value, onChange, onBlur };
};

export default useFormSelect;
