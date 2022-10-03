import Label, { LabelContent } from './Label';
import ReactSelect, { SingleValue } from 'react-select';
import { FocusEventHandler } from 'react';

export interface SelectOption {
    value: string;
    label: string;
    icon?: JSX.Element;
}

export interface SelectProps {
    name?: string;
    id?: string;
    label?: LabelContent;
    disabled?: boolean;
    placeholder?: string;
    options: SelectOption[];
    value?: SelectOption | null;
    onChange?: (newValue: SingleValue<SelectOption>) => void;
    onBlur?: FocusEventHandler<HTMLInputElement>;
}

const Select = ({ name, label, id, value, placeholder, options, disabled, onChange, onBlur }: SelectProps) => {
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
