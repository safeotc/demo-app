import React from 'react';
import useDemo, { UseDemoData } from './useDemo';

interface DemoProviderProps {
    children: React.ReactNode;
}

interface DemoData extends UseDemoData {}

const defaultDemoContext: DemoData = {
    completedSteps: [],
    completedStepsUpdater: {
        onConnected: () => {},
        onDisconnected: () => {},
        onOrderCreated: () => {},
        onOrderCanceled: () => {},
        onOrderAccepted: () => {},
        onSimulateTge: () => {},
        onTokensSent: () => {},
        onTokensClaimed: () => {},
    },
    order: null,
    demoOrderUuids: [],
    wasTgeSimulated: false,
    simulateTge: () => {},
};

export const DemoContext = React.createContext<DemoData>(defaultDemoContext);

const DemoProvider = ({ children }: DemoProviderProps) => {
    const demoContext = useDemo();

    return <DemoContext.Provider value={demoContext}>{children}</DemoContext.Provider>;
};

export default DemoProvider;
