import { useCallback, useEffect, useMemo, useState } from 'react';

const LOCAL_STORAGE_THEME_KEY = 'theme';
const LOCAL_STORAGE_THEME_VALUE_ALT = 'theme_alt';

type Theme = 'light' | 'dark';
export type ThemeToggler = () => void;

const isAltThemeOn = () => localStorage.getItem(LOCAL_STORAGE_THEME_KEY) === LOCAL_STORAGE_THEME_VALUE_ALT;

const toggleAltThemeInLocalStorage = () => {
    const isAltThemeActive = isAltThemeOn() ? true : false;
    isAltThemeActive && localStorage.removeItem(LOCAL_STORAGE_THEME_KEY);
    !isAltThemeActive && localStorage.setItem(LOCAL_STORAGE_THEME_KEY, LOCAL_STORAGE_THEME_VALUE_ALT);
};

interface ThemeData {
    isThemeInitialized: boolean;
    theme: Theme;
    toggleTheme: ThemeToggler;
}

const useTheme = (): ThemeData => {
    const [isThemeInitialized, setIsThemeInitialized] = useState(false);
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const darkModeMatcher = window.matchMedia('(prefers-color-scheme: dark)');

        const isAltThemeActive = isAltThemeOn() ? true : false;
        const isOsDarkModeOn = darkModeMatcher.matches;
        const theme = (!isOsDarkModeOn && isAltThemeActive) || (isOsDarkModeOn && !isAltThemeActive) ? 'dark' : 'light';
        setTheme(theme);
        setIsThemeInitialized(true);

        darkModeMatcher.addEventListener('change', toggleAltThemeInLocalStorage);
        return () => {
            darkModeMatcher.removeEventListener('change', toggleAltThemeInLocalStorage);
        };
    }, [setTheme, setIsThemeInitialized]);

    const toggleTheme = useCallback(() => {
        toggleAltThemeInLocalStorage();
        setTheme((t) => (t === 'light' ? 'dark' : 'light'));
    }, [setTheme]);

    const themeData: ThemeData = useMemo(
        () => ({
            isThemeInitialized,
            theme,
            toggleTheme,
        }),
        [isThemeInitialized, theme, toggleTheme]
    );

    return themeData;
};

export default useTheme;
