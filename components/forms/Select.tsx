import React from 'react';
import ReactSelect, { SingleValue } from 'react-select';

interface SelectOption {
    value: string;
    label: string;
    icon?: JSX.Element;
}

interface SelectProps {
    placeholder?: string;
    options: SelectOption[];
    onChange: (newValue: SingleValue<SelectOption>) => void;
}

const Select: React.FC<SelectProps> = ({ placeholder, options, onChange }) => {
    return (
        <ReactSelect
            onChange={onChange}
            id="create-new-order-modal"
            placeholder={placeholder}
            options={options}
            formatOptionLabel={({ label, icon }) => (
                <>
                    {!!icon && icon}
                    {label}
                </>
            )}
            isSearchable={false}
            className="c-select"
            classNamePrefix="c-select"
            /*
            onMenuClose={() => {
                const menuEl = document.querySelector('#create-new-order-modal .c-select__menu');
                const containerEl = menuEl?.parentElement;
                const clonedMenuEl = menuEl?.cloneNode(true);
                containerEl?.appendChild(clonedMenuEl!);
            }}
        */
        />
    );
};

export default Select;