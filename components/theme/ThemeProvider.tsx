import React from 'react';
import useTheme, { Theme, ThemeToggler } from './useTheme';

export const ThemeContext = React.createContext<[Theme, ThemeToggler]>(['light', () => {}]);

const ThemeProvider: React.FC = ({ children }) => {
    const { isThemeInitialized, theme, toggleTheme } = useTheme();

    if (!isThemeInitialized) {
        return null;
    }

    return <ThemeContext.Provider value={[theme, toggleTheme]}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
