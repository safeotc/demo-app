import Label, { LabelContent } from './Label';
import ReactSelect from 'react-select';
import { FocusEventHandler } from 'react';
import ErrorMessage from './ErrorMessage';
import cn from 'classnames';
import InputTooltip from './InputTooltip';

export type SelectValue = string;
export type NullableSelectValue = SelectValue | null;

export interface SelectOption {
    value: SelectValue;
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
    value?: NullableSelectValue;
    onChange?: (newValue: NullableSelectValue) => void;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onFocus?: () => void;
    errorMessage?: string;
    info?: JSX.Element | string;
}

const Select = ({
    name,
    label,
    id,
    value,
    placeholder,
    options,
    disabled,
    onChange,
    onFocus,
    onBlur,
    errorMessage,
    info,
}: SelectProps) => {
    const selectClasses = cn({
        'c-select': true,
        'c-select--danger': !!errorMessage,
    });

    return (
        <>
            {!!label && <Label danger={!!errorMessage} htmlFor={id} content={label} />}

            {!!info && <InputTooltip content={info} />}

            <ReactSelect
                value={value !== undefined ? options.find((o) => o.value === value) || null : undefined}
                onChange={!!onChange ? (newOption) => onChange(!!newOption ? newOption.value : newOption) : undefined}
                onBlur={onBlur}
                onFocus={onFocus}
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
                className={selectClasses}
                classNamePrefix="c-select"
                isDisabled={disabled}
            />
            {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </>
    );
};

export default Select;
