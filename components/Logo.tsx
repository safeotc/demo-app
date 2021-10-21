import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo: React.FC = () => {
    return (
        <Link href="/">
            <a>
                <Image src="/logo.png" alt="SafeOTC" layout="fill" />
            </a>
        </Link>
    );
};

export default Logo;
