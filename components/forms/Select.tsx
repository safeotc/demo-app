import ReactSelect, { SingleValue } from 'react-select';
import Label, { LabelContent } from './Label';

interface SelectOption {
    value: string;
    label: string;
    icon?: JSX.Element;
}

interface SelectProps {
    label?: LabelContent;
    disabled?: boolean;
    placeholder?: string;
    options: SelectOption[];
    onChange: (newValue: SingleValue<SelectOption>) => void;
}

const Select = ({ label, disabled, placeholder, options, onChange }: SelectProps) => {
    return (
        <>
            {!!label && <Label content={label} />}
            <ReactSelect
                onChange={onChange}
                id="create-new-order-modal"
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
                /*
            onMenuClose={() => {
                const menuEl = document.querySelector('#create-new-order-modal .c-select__menu');
                const containerEl = menuEl?.parentElement;
                const clonedMenuEl = menuEl?.cloneNode(true);
                containerEl?.appendChild(clonedMenuEl!);
            }}
            */
            />
        </>
    );
};

export default Select;
