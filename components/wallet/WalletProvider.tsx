import React from 'react';
import useWallet, { UseWalletData } from './useWallet';

interface WalletProviderProps {
    children: React.ReactNode;
}

interface WalletData extends UseWalletData {}

const defaultWalletContext: WalletData = {
    isConnected: false,
    network: 'Ethereum',
    address: '',
    otcBalance: '0.000',
    connect: () => {},
    disconnect: () => {},
    switchNetworks: () => {},
};

export const WalletContext = React.createContext<WalletData>(defaultWalletContext);

const WalletProvider = ({ children }: WalletProviderProps) => {
    const walletContext = useWallet();

    return <WalletContext.Provider value={walletContext}>{children}</WalletContext.Provider>;
};

export default WalletProvider;
