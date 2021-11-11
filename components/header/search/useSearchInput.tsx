import React from 'react';
import { useState } from 'react';
import { preventDefaultOnEnterOrSpace, wasEnterOrSpacePressed } from '../../../common/helpers/keyboard';

const useSearchInput = () => {
    const [value, setValue] = useState('');
    const shouldDisplayCloseIcon = !!value;
    const inputRef = React.createRef<HTMLInputElement>();

    const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    const clearSearchAndFocusInput = () => {
        setValue('');
        inputRef.current?.focus();
    };

    const clearSearchAndFocusInputOnEnterOrSpace = (e: React.KeyboardEvent<HTMLElement>) =>
        wasEnterOrSpacePressed(e) && clearSearchAndFocusInput();

    return {
        value,
        updateValue,
        shouldDisplayCloseIcon,
        inputRef,
        clearSearchAndFocusInput,
        preventDefaultOnEnterOrSpace,
        clearSearchAndFocusInputOnEnterOrSpace,
    };
};

export default useSearchInput;
