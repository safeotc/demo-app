import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/main.scss';
import useIsTabbingBodyClass from '../common/hooks/useIsTabbingBodyClass';
import ThemeProvider from '../components/theme/ThemeProvider';
import ContentWrapper from '../components/ContentWrapper';
import Side from '../sections/Side';
import Main from '../sections/Main';
import WalletProvider from '../components/wallet/WalletProvider';

const SafeOTCApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    useIsTabbingBodyClass();
    return (
        <ThemeProvider>
            <WalletProvider>
                <ContentWrapper
                    sideContent={<Side />}
                    mainContent={
                        <Main>
                            <Component {...pageProps} />
                        </Main>
                    }
                />
            </WalletProvider>
        </ThemeProvider>
    );
};
export default SafeOTCApp;
