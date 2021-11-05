import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const ToggleThemeDebugButton: React.FC = () => {
    const [, toggleTheme] = useContext(ThemeContext);

    return (
        <button style={{ position: 'fixed', right: '1em', bottom: '1em' }} onClick={toggleTheme}>
            Toggle theme
        </button>
    );
};

export default ToggleThemeDebugButton;
