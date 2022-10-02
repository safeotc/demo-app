import React from 'react';
import AlertsProvider from './alerts/AlertsProvider';
import ThemeProvider from './theme/ThemeProvider';
import WalletProvider from './wallet/WalletProvider';

interface ProvidersProps {
    children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
    return (
        <ThemeProvider>
            <AlertsProvider>
                <WalletProvider>{children}</WalletProvider>
            </AlertsProvider>
        </ThemeProvider>
    );
};

export default Providers;
