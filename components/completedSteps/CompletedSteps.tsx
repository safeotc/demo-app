import { HTMLAttributes } from 'react';
import { DemoStep } from '../demo/useDemo';
import Step from './Step';
import useCompletedSteps from './useCompletedSteps';

interface CompletedSteps extends HTMLAttributes<HTMLUListElement> {
    completedSteps: DemoStep[];
}

const CompletedSteps = ({ completedSteps, ...props }: CompletedSteps) => {
    const {
        connectCreateOrderWalletStatus,
        createOrderStatus,
        disconnectWalletStatus,
        connectAcceptOrderWalletStatus,
        acceptOrderStatus,
        simulateTGEStatus,
        switchToSellerWalletStatus,
        sendTokensStatus,
        disconnectSellerWalletStatus,
        connectBuyerWalletStatus,
    } = useCompletedSteps(completedSteps);

    return (
        <ul {...props}>
            <Step number={1} status={connectCreateOrderWalletStatus} title="Connect wallet">
                Choose one of the two demo wallets to create an order with and connect it.
            </Step>
            <Step number={2} status={createOrderStatus} title="Create order">
                Start an OTC trade process by placing a sell or buy order.
            </Step>
            <Step number={3} status={disconnectWalletStatus} title="Disconnect wallet">
                Disconnect the currently connected wallet.
            </Step>
            <Step number={4} status={connectAcceptOrderWalletStatus} title="Connect wallet">
                Choose the other demo wallet and use it to accept the order you have just created.
            </Step>
            <Step number={5} status={acceptOrderStatus} title="Accept order">
                Select the created order from the orders table. Click on it to open the order details page. Once there
                accept that order to start an OTC trade between two parties.
            </Step>
            <Step number={6} status={simulateTGEStatus} title="Simulate TGE & distribution">
                Simulate token generation event & distribute created tokens to the seller.
            </Step>
            <Step number={7} status={switchToSellerWalletStatus} title="Switch to seller wallet">
                In case you are connected to the buyer wallet, disconnect from it and connect to the wallet used for
                selling tokens.
            </Step>
            <Step number={8} status={sendTokensStatus} title="Send tokens">
                Send tokens to the buyer. To send tokens you need to open the order page and click on &quot;send
                tokens&quot; button.
            </Step>
            <Step number={9} status={disconnectSellerWalletStatus} title="Disconnect seller wallet">
                Disconnect the currently connected wallet.
            </Step>
            <Step number={10} status={connectBuyerWalletStatus} title="Connect buyer wallet">
                Connect the buyer wallet to receive the notification about the successful order execution.
            </Step>
        </ul>
    );
};

export default CompletedSteps;
