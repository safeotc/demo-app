import React, { useContext } from 'react';
import Button from '../forms/Button';
import FlatIcon from '../icons/FlatIcon';
import { ThemeContext } from '../theme/ThemeProvider';

const ToggleThemeButton: React.FC = () => {
    const [theme, toggleTheme] = useContext(ThemeContext);
    const themeIcon = theme === 'light' ? 'moon' : 'sun';

    return <Button inlineOnMobile={true} icon={<FlatIcon icon={themeIcon} />} onClick={toggleTheme} />;
};

export default ToggleThemeButton;
