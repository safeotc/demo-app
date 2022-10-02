import React from 'react';
import useTheme, { Theme, ThemeToggler } from './useTheme';

interface ThemeProviderProps {
    children: React.ReactNode;
}

interface ThemeData {
    theme: Theme;
    toggleTheme: ThemeToggler;
}

const defaultThemeContext: ThemeData = {
    theme: 'light',
    toggleTheme: () => {},
};
export const ThemeContext = React.createContext<ThemeData>(defaultThemeContext);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const { isThemeInitialized, theme, toggleTheme } = useTheme();

    if (!isThemeInitialized) {
        return null;
    }

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
