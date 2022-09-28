import React from 'react';
import NavLink from '../NavLink';
import NavItem from '../NavItem';
import useNav from './useNav';
import { ROUTE_OTC_MARKETS, ROUTE_NFT_MARKETS, ROUTE_ORDERS, ROUTE_VOTING } from '../../../common/constants/routes';

const Nav: React.FC = () => {
    const { isItemActive } = useNav();

    return (
        <nav>
            <ul className="c-navigation">
                <NavItem>
                    <NavLink href={ROUTE_ORDERS} icon="list" title="Orders" active={isItemActive('orders')} />
                </NavItem>
                <NavItem>
                    <NavLink
                        href={ROUTE_OTC_MARKETS}
                        icon="shop"
                        title="OTC Markets"
                        active={isItemActive('otcMarkets')}
                    />
                </NavItem>
                <NavItem>
                    <NavLink
                        href={ROUTE_NFT_MARKETS}
                        icon="layout-fluid"
                        title="NFT Markets"
                        active={isItemActive('nftMarkets')}
                    />
                </NavItem>
                <NavItem>
                    <NavLink href={ROUTE_VOTING} icon="comment-check" title="Voting" active={isItemActive('voting')} />
                </NavItem>
            </ul>
        </nav>
    );
};

export default Nav;
