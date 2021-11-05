import React from 'react';
import useTheme, { ThemeToggler } from './useTheme';
import { isDevEnv } from '../../helpers/env';
import ToggleThemeDebugButton from './ToggleThemeDebugButton';

export const ThemeContext = React.createContext<ThemeToggler>(() => {});

const Theme: React.FC = ({ children }) => {
    const { isThemeInitialized, toggleTheme } = useTheme();

    if (!isThemeInitialized) {
        return null;
    }

    return (
        <ThemeContext.Provider value={toggleTheme}>
            {isDevEnv() && <ToggleThemeDebugButton />}
            {children}
        </ThemeContext.Provider>
    );
};

export default Theme;
