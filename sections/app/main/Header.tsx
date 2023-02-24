import SearchInput from '../../../components/header/search/SearchInput';
import ToggleThemeButton from '../../../components/header/toggleThemeButton/ToggleThemeButton';
import WalletInfo from '../../../components/header/walletInfo/WalletInfo';

const Header = () => {
    return (
        <header className="o-header">
            <div className="o-header__search u-1/1 u-1/2@l u-3/5@xl">
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
