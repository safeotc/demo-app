import { useField } from 'formik';
import { SingleValue } from 'react-select';
import { FromFormValue, SelectOption, ToFormValue } from './Select';

type OnFormValueChange = (newValue: SingleValue<SelectOption>) => void;

const useSelect = <FormValue>(
    name: string,
    toFormValue: ToFormValue<FormValue>,
    fromFormValue: FromFormValue<FormValue>
) => {
    const [field, , helpers] = useField<FormValue>(name);
    const { value: fieldValue, onBlur } = field;
    const { setValue } = helpers;

    const value = fromFormValue(fieldValue);
    const onChange: OnFormValueChange = (newValue) => setValue(toFormValue(newValue));

    return { value, onChange, onBlur };
};

export default useSelect;
