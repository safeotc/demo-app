import Select, { SelectProps, NullableSelectValue } from '../Select';
import useFormSelect from './useFormSelect';

export type ToSelectFormValue<FormValue> = (value: NullableSelectValue) => FormValue;
export type FromSelectFormValue<FormValue> = (value: FormValue) => NullableSelectValue;

interface FormSelectProps<FormValue> extends Omit<SelectProps, 'name' | 'value' | 'onChange' | 'onBlur'> {
    name: string;
    toFormValue: ToSelectFormValue<FormValue>;
    fromFormValue: FromSelectFormValue<FormValue>;
}

const FormSelect = <FormValue extends unknown>(props: FormSelectProps<FormValue>) => {
    const { name, toFormValue, fromFormValue } = props;
    const { value, onChange, onBlur, errorMessage, isSubmitting } = useFormSelect(name, toFormValue, fromFormValue);

    return (
        <Select
            {...props}
            value={value}
            disabled={isSubmitting}
            onChange={onChange}
            onBlur={onBlur}
            errorMessage={errorMessage}
        />
    );
};

export default FormSelect;
