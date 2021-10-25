import React from 'react';
import NavLink from './NavLink';
import NavItem from './NavItem';

const Nav: React.FC = () => {
    return (
        <nav className="u-margin-top-large">
            <ul className="c-navigation">
                <NavItem>
                    <NavLink href="/" icon="home">
                        Home
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/" icon="bank">
                        Trade
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/" icon="clock" active={true}>
                        Expired
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/" icon="calendar">
                        Upcoming
                    </NavLink>
                </NavItem>
            </ul>
        </nav>
    );
};

export default Nav;
