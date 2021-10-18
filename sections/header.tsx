import React, { useContext } from 'react';
import { ThemeContext } from '../components/theme';

const Header: React.FC = () => {
    const toggleTheme = useContext(ThemeContext);

    return (
        <header>
            is a header{' '}
            <div>
                <button onClick={toggleTheme}>Toggle theme</button>
            </div>
        </header>
    );
};

export default Header;
