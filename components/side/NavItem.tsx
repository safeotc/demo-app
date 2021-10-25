import React from 'react';

const NavItem: React.FC = ({ children }) => {
    return <li className="c-navigation__item">{children}</li>;
};

export default NavItem;
