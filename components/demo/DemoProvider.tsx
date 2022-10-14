import React from 'react';
import useDemo, { DEMO_WALLETS, UseDemoData } from './useDemo';

interface DemoProviderProps {
    children: React.ReactNode;
}

interface DemoData extends UseDemoData {}

const defaultDemoContext: DemoData = {
    wallet: DEMO_WALLETS[0],
    changeWallet: (id) => {},
};

export const DemoContext = React.createContext<DemoData>(defaultDemoContext);

const DemoProvider = ({ children }: DemoProviderProps) => {
    const demoContext = useDemo();

    return <DemoContext.Provider value={demoContext}>{children}</DemoContext.Provider>;
};

export default DemoProvider;
