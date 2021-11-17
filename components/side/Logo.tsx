import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImage from '../../public/images/logo.png';
import { ROUTE_HOME } from '../../common/constants/routes';

const Logo: React.FC = () => {
    return (
        <div className="u-text-center">
            <Link href={ROUTE_HOME}>
                <a className="c-logo">
                    <div className="c-logo__image">
                        <Image src={logoImage} alt="SafeOTC" layout="fill" />
                    </div>
                    <span className="c-logo__title">SafeOTC</span>
                </a>
            </Link>
        </div>
    );
};

export default Logo;
