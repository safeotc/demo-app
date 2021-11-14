import React from 'react';
import AlertsProvider from './alerts/AlertsProvider';
import ThemeProvider from './theme/ThemeProvider';
import WalletProvider from './wallet/WalletProvider';

const Providers: React.FC = ({ children }) => {
    return (
        <ThemeProvider>
            <AlertsProvider>
                <WalletProvider>{children}</WalletProvider>
            </AlertsProvider>
        </ThemeProvider>
    );
};

export default Providers;
