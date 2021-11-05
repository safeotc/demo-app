import React from 'react';
import SearchInput from '../../components/header/search/SearchInput';
import ToggleThemeButton from '../../components/header/ToggleThemeButton';
import WalletInfo from '../../components/header/WalletInfo';

const Header: React.FC = () => {
    return (
        <header className="o-header u-margin-bottom-large">
            <div className="o-header__left u-2/3 u-1/2@l u-2/5@xxl">
                <SearchInput />
            </div>
            <div className="o-header__right">
                <WalletInfo />
                <ToggleThemeButton />
            </div>
        </header>
    );
};

export default Header;
