import Input, { InputProps } from '../Input';
import useFormInput from './useFormInput';

interface FormInputProps extends InputProps {
    name: string;
}

const FormInput = (props: FormInputProps) => {
    const { name, ...inputProps } = props;
    const { value, onChange, onBlur, errorMessage, isSubmitting } = useFormInput(name);

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
