import ReactSelect, { SingleValue } from 'react-select';
import Label, { LabelContent } from '../Label';
import useSelect from './useSelect';

export interface SelectOption {
    value: string;
    label: string;
    icon?: JSX.Element;
}

export type ToFormValue<FormValue> = (value: SingleValue<SelectOption>) => FormValue;
export type FromFormValue<FormValue> = (value: FormValue) => SelectOption | null;

interface SelectProps<FormValue> {
    id?: string;
    name: string;
    label?: LabelContent;
    disabled?: boolean;
    placeholder?: string;
    options: SelectOption[];
    toFormValue: ToFormValue<FormValue>;
    fromFormValue: FromFormValue<FormValue>;
}

const Select = <FormValue extends unknown>({
    id,
    name,
    label,
    disabled,
    placeholder,
    options,
    toFormValue,
    fromFormValue,
}: SelectProps<FormValue>) => {
    const { value, onChange, onBlur } = useSelect(name, toFormValue, fromFormValue);

    return (
        <>
            {!!label && <Label htmlFor={id} content={label} />}
            <ReactSelect
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                inputId={id}
                placeholder={placeholder}
                options={options}
                formatOptionLabel={({ label, icon }) =>
                    !!icon ? (
                        <div className="o-align o-align--vertical-center">
                            {icon}
                            <span className="u-margin-left-small">{label}</span>
                        </div>
                    ) : (
                        label
                    )
                }
                isSearchable={false}
                className="c-select"
                classNamePrefix="c-select"
                isDisabled={disabled}
            />
        </>
    );
};

export default Select;
