import Select, { SelectProps } from '../Select';
import useFormSelect from './useFormSelect';

interface FormSelectProps extends Omit<SelectProps, 'name' | 'value' | 'onChange' | 'onBlur'> {
    name: string;
}

const FormSelect = (props: FormSelectProps) => {
    const { name } = props;
    const { value, onFocus, onChange, onBlur, errorMessage, isSubmitting } = useFormSelect(name);

    return (
        <Select
            {...props}
            value={value}
            disabled={isSubmitting}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            errorMessage={errorMessage}
        />
    );
};

export default FormSelect;
