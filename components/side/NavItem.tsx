import React from 'react';

interface NavItemProps {
    children: React.ReactNode;
}

const NavItem = ({ children }: NavItemProps) => {
    return <li className="c-navigation__item">{children}</li>;
};

export default NavItem;
