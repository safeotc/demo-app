import React from 'react';
import NavLink from './NavLink';
import NavItem from './NavItem';

const Nav: React.FC = () => {
    return (
        <nav>
            <ul className="c-navigation">
                <NavItem>
                    <NavLink href="/" icon="home" title="Home" />
                </NavItem>

                <NavItem>
                    <NavLink href="/" icon="bank" title="Trade" />
                </NavItem>
                <NavItem>
                    <NavLink href="/" icon="clock" active={true} title="Expired" />
                </NavItem>
                <NavItem>
                    <NavLink href="/" icon="calendar" title="Upcoming" />
                </NavItem>
            </ul>
        </nav>
    );
};

export default Nav;
