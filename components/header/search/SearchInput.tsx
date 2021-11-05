import React from 'react';
import Input, { InputProps } from '../../forms/Input';
import FlatIcon from '../../icons/FlatIcon';
import useSearchInput from './useSearchInput';

const SearchInput: React.FC<InputProps> = (props) => {
    const {
        value,
        updateValue,
        shouldDisplayCloseIcon,
        inputRef,
        clearSearchAndFocusInput,
        preventDefaultOnEnterOrSpace,
        clearSearchAndFocusInputOnEnterOrSpace,
    } = useSearchInput();

    const clearTextIcon = shouldDisplayCloseIcon ? (
        <FlatIcon
            onClick={clearSearchAndFocusInput}
            onKeyDown={preventDefaultOnEnterOrSpace}
            onKeyUp={clearSearchAndFocusInputOnEnterOrSpace}
            icon="cross"
            title="Clear search text"
            className="c-input__clear-text-icon"
            tabIndex={0}
        />
    ) : undefined;

    return (
        <Input
            {...props}
            value={value}
            onChange={updateValue}
            placeholder="Search through offers"
            leftIcon={<FlatIcon icon="search" />}
            rightIcon={clearTextIcon}
            className="u-margin-right-tiny"
            ref={inputRef}
        />
    );
};

export default SearchInput;
