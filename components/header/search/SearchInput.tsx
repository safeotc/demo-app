import Input, { InputProps } from '../../forms/Input';
import FlatIcon from '../../icons/FlatIcon';
import Popover from '../../popover/Popover';
import useSearchInput from './useSearchInput';

const SearchInput = (props: InputProps) => {
    const {
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

    const popover = <div className="c-search-input-results">Coming soon.</div>;

    return (
        <Popover isOpened={isPopoverOpened} popover={popover} onCloseRequest={closePopover} position="bottomCenter">
            <Input
                {...props}
                value={value}
                onChange={updateValue}
                onFocus={openPopover}
                onBlur={closePopover}
                placeholder="Search through offers"
                leftIcon={<FlatIcon icon="search" />}
                rightIcon={clearTextIcon}
                ref={inputRef}
            />
        </Popover>
    );
};

export default SearchInput;
