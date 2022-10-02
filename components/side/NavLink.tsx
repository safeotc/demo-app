import Link from 'next/link';
import FlatIcon from '../icons/FlatIcon';
import cn from 'classnames';

interface NavLinkProps {
    href: string;
    icon: string;
    title: string;
    active?: boolean;
}

const NavLink = ({ href, icon, active, title }: NavLinkProps) => {
    const navLinkClasses = cn('c-nav-link', { 'c-nav-link--active': !!active });

    return (
        <Link href={href}>
            <a className={navLinkClasses}>
                <FlatIcon icon={icon} title={title} />
                <span className="c-nav-link__text">{title}</span>
            </a>
        </Link>
    );
};

export default NavLink;
