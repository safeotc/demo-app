import Link from 'next/link';
import React from 'react';

const OrdersLayout: React.FC = ({ children }) => {
    return (
        <>
            <ul>
                <li>
                    <Link href="/orders/open">
                        <a>Open</a>
                    </Link>
                </li>
                <li>
                    <Link href="/orders/active">
                        <a>Active</a>
                    </Link>
                </li>
                <li>
                    <Link href="/orders/complete">
                        <a>Complete</a>
                    </Link>
                </li>
            </ul>

            {children}
        </>
    );
};

export default OrdersLayout;
