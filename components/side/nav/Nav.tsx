import React from 'react';
import NavLink from '../NavLink';
import NavItem from '../NavItem';
import useNav from './useNav';
import { ROUTE_MARKETS, ROUTE_ORDERS, ROUTE_VOTING } from '../../../common/constants/routes';

const Nav: React.FC = () => {
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
                    <NavLink href={ROUTE_VOTING} icon="comment-check" title="Voting" active={isItemActive('voting')} />
                </NavItem>
            </ul>
        </nav>
    );
};

export default Nav;
