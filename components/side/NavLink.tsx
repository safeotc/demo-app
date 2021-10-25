import React from 'react';
import Link from 'next/link';
import FlatIcon from '../icons/FlatIcon';
import cn from 'classnames';

interface NavLinkProps {
    href: string;
    icon: string;
    active?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, active, children }) => {
    const navLinkClasses = cn('c-nav-link', { 'c-nav-link--active': !!active });

    return (
        <Link href={href}>
            <a className={navLinkClasses}>
                <FlatIcon icon={icon} />
                <span className="c-nav-link__text">{children}</span>
            </a>
        </Link>
    );
};

export default NavLink;
