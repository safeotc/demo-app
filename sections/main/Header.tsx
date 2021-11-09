import React from 'react';
import SearchInput from '../../components/header/search/SearchInput';
import ToggleThemeButton from '../../components/header/ToggleThemeButton';
import WalletInfo from '../../components/header/wallet/WalletInfo';

const Header: React.FC = () => {
    return (
        <header className="o-header u-margin-bottom-large">
            <div className="o-header__search u-1/1 u-1/2@l u-2/5@xxl">
                <SearchInput />
            </div>
            <div className="o-header__wallet-theme">
                <WalletInfo />
                <ToggleThemeButton />
            </div>
        </header>
    );
};

export default Header;
