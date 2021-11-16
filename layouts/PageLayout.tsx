import React from 'react';
import { AppWithLayoutProps } from '../pages/_app';

type PageWithLayoutProps = AppWithLayoutProps;

const PageWithLayout: React.FC<PageWithLayoutProps> = ({ Component, pageProps }) => {
    const component = <Component {...pageProps} />;

    if (!Component.Layout) {
        return component;
    }

    return <Component.Layout>{component}</Component.Layout>;
};

export default PageWithLayout;
