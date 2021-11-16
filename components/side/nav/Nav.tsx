import React from 'react';
import NavLink from '../NavLink';
import NavItem from '../NavItem';
import useNav from './useNav';

const Nav: React.FC = () => {
    const { isMenuItemActive } = useNav();

    return (
        <nav>
            <ul className="c-navigation">
                <NavItem>
                    <NavLink href="/orders" icon="list" title="Orders" active={isMenuItemActive('orders')} />
                </NavItem>
                <NavItem>
                    <NavLink href="/markets" icon="shop" title="Markets" active={isMenuItemActive('markets')} />
                </NavItem>
                <NavItem>
                    <NavLink href="/voting" icon="comment-check" title="Voting" active={isMenuItemActive('voting')} />
                </NavItem>
            </ul>
        </nav>
    );
};

export default Nav;
