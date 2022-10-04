import Input, { InputProps } from '../Input';
import useFormInput from './useFormInput';

export type ToInputFormValue<FormValue> = (value: string) => FormValue;
export type FromInputFormValue<FormValue> = (value: FormValue) => string;

interface FormInputProps<FormValue> extends InputProps {
    name: string;
    toFormValue: ToInputFormValue<FormValue>;
    fromFormValue: FromInputFormValue<FormValue>;
}

const FormInput = <FormValue extends unknown = string>(props: FormInputProps<FormValue>) => {
    const { name, toFormValue, fromFormValue, ...inputProps } = props;
    const { value, onChange, onBlur, errorMessage, isSubmitting } = useFormInput(name, toFormValue, fromFormValue);

    return (
        <Input
            {...inputProps}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={isSubmitting}
            errorMessage={errorMessage}
        />
    );
};

export default FormInput;
