import NavLink from '../NavLink';
import NavItem from '../NavItem';
import useNav from './useNav';
import { ROUTE_MARKETS, ROUTE_NFTS, ROUTE_ORDERS, ROUTE_VOTING } from '../../../common/constants/routes';
import DemoSettings from '../../nav/DemoSettings';

const Nav = () => {
    const { isItemActive } = useNav();

    return (
        <nav>
            <ul className="c-navigation">
                <NavItem>
                    <NavLink href={ROUTE_ORDERS} icon="list" title="Orders" active={isItemActive('orders')} />
                </NavItem>
                <NavItem>
                    <NavLink href={ROUTE_MARKETS} icon="shop" title="Markets" active={isItemActive('markets')} />
                </NavItem>
                <NavItem>
                    <NavLink href={ROUTE_NFTS} icon="layout-fluid" title="NFTs" active={isItemActive('nfts')} />
                </NavItem>
                <NavItem>
                    <NavLink href={ROUTE_VOTING} icon="comment-check" title="Voting" active={isItemActive('voting')} />
                </NavItem>
                <NavItem>
                    <DemoSettings />
                </NavItem>
            </ul>
        </nav>
    );
};

export default Nav;
