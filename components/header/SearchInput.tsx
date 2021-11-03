import React, { useState } from 'react';
import Input, { InputProps } from '../forms/Input';
import FlatIcon from '../icons/FlatIcon';

const SearchInput: React.FC<InputProps> = (props) => {
    const [value, setValue] = useState('');
    const inputRef = React.createRef<HTMLInputElement>();

    const clearSearchAndFocusInput = () => {
        setValue('');
        inputRef.current?.focus();
    };

    const wasEnterOrSpacePressed = (e: React.KeyboardEvent<HTMLElement>) =>
        ['enter', ' '].includes(e.key.toLowerCase());

    const preventDefaultOnEnterOrSpace = (e: React.KeyboardEvent<HTMLElement>) =>
        wasEnterOrSpacePressed(e) && e.preventDefault();

    const clearSearchAndFocusInputOnEnterOrSpace = (e: React.KeyboardEvent<HTMLElement>) =>
        wasEnterOrSpacePressed(e) && clearSearchAndFocusInput();

    const clearTextIcon = !!value ? (
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
            onChange={(e) => setValue(e.target.value)}
            leftIcon={<FlatIcon icon="search" />}
            rightIcon={clearTextIcon}
            ref={inputRef}
        />
    );
};

export default SearchInput;
