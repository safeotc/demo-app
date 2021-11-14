import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/main.scss';
import useIsTabbingBodyClass from '../common/hooks/useIsTabbingBodyClass';
import ContentWrapper from '../components/ContentWrapper';
import Side from '../sections/Side';
import Main from '../sections/Main';
import Providers from '../components/Providers';

const SafeOTCApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    useIsTabbingBodyClass();

    return (
        <Providers>
            <ContentWrapper
                sideContent={<Side />}
                mainContent={
                    <Main>
                        <Component {...pageProps} />
                    </Main>
                }
            />
        </Providers>
    );
};
export default SafeOTCApp;
