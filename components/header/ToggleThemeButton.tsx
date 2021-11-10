import React, { useContext } from 'react';
import Button from '../forms/buttons/Button';
import FlatIcon from '../icons/FlatIcon';
import { ThemeContext } from '../theme/ThemeProvider';

const ToggleThemeButton: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const themeIcon = theme === 'light' ? 'moon' : 'sun';

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
