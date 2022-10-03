import { SingleValue } from 'react-select';
import Select, { SelectOption, SelectProps } from '../Select';
import useFormSelect from './useFormSelect';

export type ToFormValue<FormValue> = (value: SingleValue<SelectOption>) => FormValue;
export type FromFormValue<FormValue> = (value: FormValue) => SelectOption | null;

interface FormSelectProps<FormValue> extends Omit<SelectProps, 'name' | 'value' | 'onChange' | 'onBlur'> {
    name: string;
    toFormValue: ToFormValue<FormValue>;
    fromFormValue: FromFormValue<FormValue>;
}

const FormSelect = <FormValue extends unknown>(props: FormSelectProps<FormValue>) => {
    const { name, toFormValue, fromFormValue } = props;
    const { value, onChange, onBlur } = useFormSelect(name, toFormValue, fromFormValue);

    return <Select {...props} value={value} onChange={onChange} onBlur={onBlur} />;
};

export default FormSelect;
