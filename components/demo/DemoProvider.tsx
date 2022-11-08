import React from 'react';
import useDemo, { UseDemoData } from './useDemo';

interface DemoProviderProps {
    children: React.ReactNode;
}

interface DemoData extends UseDemoData {}

const defaultDemoContext: DemoData = {
    wallet: { address: '', otcBalance: '' },
    changeWallet: () => {},
    wasWelcomeScreenDisplayed: false,
    setWasWelcomeScreenDisplayed: () => {},
    completedSteps: [],
};

export const DemoContext = React.createContext<DemoData>(defaultDemoContext);

const DemoProvider = ({ children }: DemoProviderProps) => {
    const demoContext = useDemo();

    return <DemoContext.Provider value={demoContext}>{children}</DemoContext.Provider>;
};

export default DemoProvider;
