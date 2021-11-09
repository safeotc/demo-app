import React from 'react';
import useWallet, { UseWalletData } from './useWallet';

interface WalletData extends UseWalletData {}

const defaultWalletContext: WalletData = {
    isConnected: false,
    network: 'Ethereum',
    address: '',
    otcBalance: '0.000',
    connect: () => {},
    switchNetworks: (network) => {},
};

export const WalletContext = React.createContext<WalletData>(defaultWalletContext);

const WalletProvider: React.FC = ({ children }) => {
    const walletContext = useWallet();

    return <WalletContext.Provider value={walletContext}>{children}</WalletContext.Provider>;
};

export default WalletProvider;
