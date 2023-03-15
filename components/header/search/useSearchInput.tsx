import React, { useCallback, useRef } from 'react';
import { useState } from 'react';
import { preventDefaultOnEnterOrSpace, wasEnterOrSpace } from '../../../common/helpers/keyboard';

const useSearchInput = () => {
    const [value, setValue] = useState('');
    const shouldDisplayCloseIcon = !!value;
    const inputRef = useRef<HTMLInputElement>(null);

    const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    const clearSearchAndFocusInput = () => {
        setValue('');
        inputRef.current?.focus();
    };

    const clearSearchAndFocusInputOnEnterOrSpace = (e: React.KeyboardEvent<HTMLElement>) =>
        wasEnterOrSpace(e) && clearSearchAndFocusInput();

    const [isPopoverOpened, setIsPopoverOpened] = useState(false);
    const openPopover = useCallback(() => setIsPopoverOpened(true), [setIsPopoverOpened]);
    const closePopover = useCallback(() => setIsPopoverOpened(false), [setIsPopoverOpened]);

    return {
        value,
        updateValue,
        shouldDisplayCloseIcon,
        inputRef,
        clearSearchAndFocusInput,
        preventDefaultOnEnterOrSpace,
        clearSearchAndFocusInputOnEnterOrSpace,
        isPopoverOpened,
        openPopover,
        closePopover,
    };
};

export default useSearchInput;
