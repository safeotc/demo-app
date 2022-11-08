import { HTMLAttributes } from 'react';
import { DemoStep } from '../demo/useDemo';
import Step from './Step';

interface CompletedSteps extends HTMLAttributes<HTMLUListElement> {
    completedSteps: DemoStep[];
}

const CompletedSteps = ({ completedSteps, ...props }: CompletedSteps) => {
    const isStepCompleted = (step: DemoStep) => completedSteps.indexOf(step) >= 0;

    return (
        <ul {...props}>
            <Step
                isCompleted={isStepCompleted('connect_create_order_wallet')}
                title="Connect wallet"
                description="Choose one of the two wallets to create an order with."
            />
            <Step
                isCompleted={isStepCompleted('create_order')}
                title="Create order"
                description="Start an OTC trade process by placing a sell or buy order."
            />
            <li>Place a buy / sell order with the connected wallet.</li>
            <li>Disconnect the currently used wallet.</li>
            <li>Switch to another wallet and connect it in order to match the order you&apos;ve just created.</li>
        </ul>
    );
};

export default CompletedSteps;
