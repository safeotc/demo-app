import Label from '../Label';
import useRadios from './useRadios';
import cn from 'classnames';

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
    disabled?: boolean;
    label?: string;
    errorMessage?: string;
    textOverflow?: 'ellipsis';
    inline?: boolean;
}

const Radios = ({
    value,
    label,
    errorMessage,
    disabled,
    options,
    name,
    onChange,
    allowNoSelection,
    textOverflow,
    inline,
}: RadiosProps) => {
    const { setValue, setNullValueIfCheckedAndAllowedOnClick, setNullValueIfCheckedAndAllowedOnKeyUp } = useRadios(
        onChange,
        allowNoSelection
    );
    const radiosClasses = cn('c-radios', {
        'c-radios--inline': !!inline,
    });
    const optionClasses = cn('c-radios__option', { 'c-radios__option--inline': !!inline });
    const labelTextClasses = cn('c-radios__label-text', {
        'u-text-ellipsis': textOverflow === 'ellipsis',
    });

    return (
        <>
            {!!label && <Label danger={!!errorMessage} htmlFor={`${name}-1`} content={label} />}

            <div className={radiosClasses}>
                {options.map((o, idx) => (
                    <div className={optionClasses} key={o.value}>
                        <label className="c-radios__label">
                            <input
                                className="c-radios__input"
                                type="radio"
                                value={o.value}
                                name={name}
                                id={`${name}-${idx + 1}`}
                                checked={o.value === value}
                                onChange={setValue}
                                onClick={setNullValueIfCheckedAndAllowedOnClick(value, o.value)}
                                onKeyUp={setNullValueIfCheckedAndAllowedOnKeyUp(value, o.value)}
                                disabled={disabled}
                            />
                            <span className={labelTextClasses}>{o.label}</span>
                        </label>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Radios;
