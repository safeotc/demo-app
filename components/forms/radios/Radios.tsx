import useRadios from './useRadios';

export type RadioValue = string;
export type NullableRadioValue = RadioValue | null;
export type OnRadioChange = (newValue: NullableRadioValue) => void;

export interface RadioOption {
    value: RadioValue;
    label: string;
}

interface RadiosProps {
    options: RadioOption[];
    name: string;
    onChange: OnRadioChange;
    value: NullableRadioValue;
    allowNoSelection?: boolean;
}

const Radios = ({ value, options, name, onChange, allowNoSelection }: RadiosProps) => {
    const { setValue, setNullValueIfCheckedAndAllowedOnClick, setNullValueIfCheckedAndAllowedOnKeyUp } = useRadios(
        onChange,
        allowNoSelection
    );

    return (
        <div className="c-radios">
            {options.map((o) => (
                <div className="c-radios__option" key={o.value}>
                    <label className="c-radios__label">
                        <input
                            className="c-radios__input"
                            type="radio"
                            value={o.value}
                            name={name}
                            checked={o.value === value}
                            onChange={setValue}
                            onClick={setNullValueIfCheckedAndAllowedOnClick(value, o.value)}
                            onKeyUp={setNullValueIfCheckedAndAllowedOnKeyUp(value, o.value)}
                        />
                        <span className="c-radios__label-text">{o.label}</span>
                    </label>
                </div>
            ))}
        </div>
    );
};

export default Radios;
