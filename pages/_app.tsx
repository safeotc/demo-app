import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/main.scss';

const SafeOTCApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};
export default SafeOTCApp;
