import { useContext } from 'react';
import { ThemeContext } from '../../theme/ThemeProvider';

const useToggleThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const themeIcon = theme === 'light' ? 'moon' : 'sun';
    return { toggleTheme, themeIcon };
};

export default useToggleThemeButton;
