import Button from '../../forms/buttons/Button';
import FlatIcon from '../../icons/FlatIcon';
import useToggleThemeButton from './useToggleThemeButton';

const ToggleThemeButton = () => {
    const { themeIcon, toggleTheme } = useToggleThemeButton();

    return (
        <Button
            className="u-margin-left-small"
            inlineOnMobile={true}
            icon={<FlatIcon icon={themeIcon} />}
            iconOnly={true}
            onClick={toggleTheme}
        >
            Toggle theme
        </Button>
    );
};

export default ToggleThemeButton;
