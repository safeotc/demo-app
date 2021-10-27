import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/main.scss';
import useIsTabbingBodyClass from '../common/hooks/useIsTabbingBodyClass';

const SafeOTCApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    useIsTabbingBodyClass();
    return <Component {...pageProps} />;
};
export default SafeOTCApp;
