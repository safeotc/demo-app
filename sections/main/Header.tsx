import React from 'react';
import SearchInput from '../../components/header/search/SearchInput';
import WalletInfo from '../../components/header/WalletInfo';

const Header: React.FC = () => {
    return (
        <header className="o-header u-margin-bottom-large">
            <div className="o-header__left u-2/3 u-1/2@l u-2/5@xxl">
                <SearchInput placeholder="Search through offers" />
            </div>
            <div className="o-header__right">
                <WalletInfo />
            </div>
        </header>
    );
};

export default Header;
