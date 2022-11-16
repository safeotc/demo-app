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
                description="Choose one of the two demo wallets to create an order with and connect it."
            />
            <Step
                isCompleted={isStepCompleted('create_order')}
                title="Create order"
                description="Start an OTC trade process by placing a sell or buy order."
            />
            <Step
                isCompleted={isStepCompleted('disconnect_wallet')}
                title="Disconnect wallet"
                description="Disconnect the currently connected wallet."
            />
            <Step
                isCompleted={isStepCompleted('connect_accept_order_wallet')}
                title="Connect wallet"
                description="Choose the other demo wallet and use it to accept the order you have just created."
            />
            <Step
                isCompleted={isStepCompleted('accept_order')}
                title="Accept order"
                description="Select the created order from the orders table. Click on it to open the order details page. Once there accept that order to start an OTC trade between two parties."
            />
            <Step
                isCompleted={isStepCompleted('simulate_tge')}
                title="Simulate TGE & distribution"
                description="Simulate token generation event & distribute created tokens to the seller."
            />
            <Step
                isCompleted={isStepCompleted('send_tokens')}
                title="Send tokens"
                description='Switch to seller demo wallet and send tokens to the buyer. To send tokens you need to open the order page and click on &qout;send tokens" button.'
            />
            <Step
                isCompleted={isStepCompleted('disconnect_seller_wallet')}
                title="Disconnect seller wallet"
                description="Disconnect the currently connected wallet."
            />
            <Step
                isCompleted={isStepCompleted('connect_buyer_wallet')}
                title="Connect buyer wallet"
                description="Connect the buyer wallet to receive the notification about the successful order execution."
            />
        </ul>
    );
};

export default CompletedSteps;
