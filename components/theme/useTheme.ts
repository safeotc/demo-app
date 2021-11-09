import { useCallback, useEffect, useState } from 'react';

const LOCAL_STORAGE_THEME_KEY = 'theme';
const LOCAL_STORAGE_THEME_VALUE_ALT = 'theme_alt';

export type Theme = 'light' | 'dark';
export type ThemeToggler = () => void;

const isAltThemeOn = () => localStorage.getItem(LOCAL_STORAGE_THEME_KEY) === LOCAL_STORAGE_THEME_VALUE_ALT;

const toggleAltThemeInLocalStorage = () => {
    const isAltThemeActive = isAltThemeOn() ? true : false;
    isAltThemeActive && localStorage.removeItem(LOCAL_STORAGE_THEME_KEY);
    !isAltThemeActive && localStorage.setItem(LOCAL_STORAGE_THEME_KEY, LOCAL_STORAGE_THEME_VALUE_ALT);
};

const useTheme = () => {
    const [isThemeInitialized, setIsThemeInitialized] = useState(false);
    const [theme, setTheme] = useState<Theme>('light');

    const updateTheme = useCallback(
        (newTheme: Theme) => {
            if (!!document && !!document.body) {
                document.body.classList.add('g-theme');
                document.body.classList.remove('g-theme--dark');
                newTheme === 'dark' && document.body.classList.add('g-theme--dark');
            }
            setTheme(newTheme);
        },
        [setTheme]
    );

    useEffect(() => {
        const darkModeMatcher = window.matchMedia('(prefers-color-scheme: dark)');

        const isAltThemeActive = isAltThemeOn() ? true : false;
        const isOsDarkModeOn = darkModeMatcher.matches;
        const theme = (!isOsDarkModeOn && isAltThemeActive) || (isOsDarkModeOn && !isAltThemeActive) ? 'dark' : 'light';
        updateTheme(theme);
        setIsThemeInitialized(true);

        darkModeMatcher.addEventListener('change', toggleAltThemeInLocalStorage);
        return () => {
            darkModeMatcher.removeEventListener('change', toggleAltThemeInLocalStorage);
        };
    }, [updateTheme, setIsThemeInitialized]);

    const toggleTheme = useCallback(() => {
        toggleAltThemeInLocalStorage();
        const newTheme = theme === 'light' ? 'dark' : 'light';
        updateTheme(newTheme);
    }, [theme, updateTheme]);

    return { isThemeInitialized, theme, toggleTheme };
};

export default useTheme;
