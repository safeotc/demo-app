import React from 'react';
import ReactSelect from 'react-select';

interface SelectProps {
    placeholder?: string;
}

const Select: React.FC<SelectProps> = ({ placeholder }) => {
    return (
        <ReactSelect
            id="create-new-order-modal"
            placeholder={placeholder}
            options={[{ value: 'a', label: 'lalala' }]}
            isSearchable={false}
            className="c-select"
            classNamePrefix="c-select"
            onMenuClose={() => {
                const menuEl = document.querySelector('#create-new-order-modal .c-select__menu');
                const containerEl = menuEl?.parentElement;
                const clonedMenuEl = menuEl?.cloneNode(true);
                containerEl?.appendChild(clonedMenuEl!);
            }}
        />
    );
};

export default Select;
