import React from 'react';
import useTheme, { ThemeToggler } from './useTheme';
import cn from 'classnames';

export const ThemeContext = React.createContext<ThemeToggler>(() => {});

const Theme: React.FC = ({ children }) => {
    const { isThemeInitialized, theme, toggleTheme } = useTheme();

    if (!isThemeInitialized) {
        return null;
    }

    const themeClasses = cn('g-theme', { 'g-theme--dark': theme === 'dark' });

    return (
        <ThemeContext.Provider value={toggleTheme}>
            <div className={themeClasses}>{children}</div>
        </ThemeContext.Provider>
    );
};

export default Theme;
