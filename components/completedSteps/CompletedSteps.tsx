import { HTMLAttributes } from 'react';
import { DemoStep } from '../demo/useDemo';
import Step from './Step';
import useCompletedSteps from './useCompletedSteps';

interface CompletedSteps extends HTMLAttributes<HTMLUListElement> {
    completedSteps: DemoStep[];
}

const CompletedSteps = ({ completedSteps, ...props }: CompletedSteps) => {
    const {
        isConnectCreateOrderWalletCompleted,
        isCreateOrderCompleted,
        isDisconnectWalletCompleted,
        isConnectAcceptOrderWalletCompleted,
        isAcceptOrderCompleted,
        isSimulateTGECompleted,
        isSwitchToSellerWalletCompleted,
        isSendTokensCompleted,
        isDisconnectSellerWalletCompleted,
        isConnectBuyerWalletCompleted,
    } = useCompletedSteps(completedSteps);

    return (
        <ul {...props}>
            <Step
                isCompleted={isConnectCreateOrderWalletCompleted}
                title="Connect wallet"
                description="Choose one of the two demo wallets to create an order with and connect it."
            />
            <Step
                isCompleted={isCreateOrderCompleted}
                title="Create order"
                description="Start an OTC trade process by placing a sell or buy order."
            />
            <Step
                isCompleted={isDisconnectWalletCompleted}
                title="Disconnect wallet"
                description="Disconnect the currently connected wallet."
            />
            <Step
                isCompleted={isConnectAcceptOrderWalletCompleted}
                title="Connect wallet"
                description="Choose the other demo wallet and use it to accept the order you have just created."
            />
            <Step
                isCompleted={isAcceptOrderCompleted}
                title="Accept order"
                description="Select the created order from the orders table. Click on it to open the order details page. Once there accept that order to start an OTC trade between two parties."
            />
            <Step
                isCompleted={isSimulateTGECompleted}
                title="Simulate TGE & distribution"
                description="Simulate token generation event & distribute created tokens to the seller."
            />
            <Step
                isCompleted={isSwitchToSellerWalletCompleted}
                title="Switch to seller wallet"
                description="In case you are connected to the buyer wallet, disconnect from it and connect to the wallet used for selling tokens."
            />
            <Step
                isCompleted={isSendTokensCompleted}
                title="Send tokens"
                description='Switch to seller demo wallet and send tokens to the buyer. To send tokens you need to open the order page and click on "send tokens" button.'
            />
            <Step
                isCompleted={isDisconnectSellerWalletCompleted}
                title="Disconnect seller wallet"
                description="Disconnect the currently connected wallet."
            />
            <Step
                isCompleted={isConnectBuyerWalletCompleted}
                title="Connect buyer wallet"
                description="Connect the buyer wallet to receive the notification about the successful order execution."
            />
        </ul>
    );
};

export default CompletedSteps;
