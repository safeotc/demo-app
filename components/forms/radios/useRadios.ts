import { ChangeEventHandler, KeyboardEventHandler, useCallback } from 'react';
import { wasSpace } from '../../../common/helpers/keyboard';
import { NullableRadioValue, OnRadioChange, RadioValue } from './Radios';

const useRadios = (onChange: OnRadioChange, allowNoSelection?: boolean) => {
    const setValue: ChangeEventHandler<HTMLInputElement> = useCallback((e) => onChange(e.target.value), [onChange]);

    const setNullValueIfCheckedAndAllowedOnClick = (value: NullableRadioValue, optionValue: RadioValue) => () =>
        !!allowNoSelection && value === optionValue && onChange(null);

    const setNullValueIfCheckedAndAllowedOnKeyUp =
        (value: NullableRadioValue, optionValue: RadioValue): KeyboardEventHandler<HTMLInputElement> =>
        (e) => {
            if (!allowNoSelection || !wasSpace(e) || value !== optionValue) {
                return;
            }
            e.preventDefault();
            onChange(null);
        };

    return { setValue, setNullValueIfCheckedAndAllowedOnClick, setNullValueIfCheckedAndAllowedOnKeyUp };
};

export default useRadios;
