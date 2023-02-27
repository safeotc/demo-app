import { HTMLAttributes } from 'react';
import { DemoStep } from '../demo/useDemo';
import Button from '../forms/buttons/Button';
import PrimaryButton from '../forms/buttons/PrimaryButton';
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
        simulateTgeStatus,
        switchToSellerWalletStatus,
        sendTokensStatus,
        disconnectSellerWalletStatus,
        connectBuyerWalletStatus,
        claimTokensStatus,
        isSimuateTgeButtonDisabled,
        simulateTge,
    } = useCompletedSteps(completedSteps);

    return (
        <ul {...props}>
            <Step number={1} status={connectCreateOrderWalletStatus} title="Connect wallet">
                Choose one of the two demo wallets and connect to it.
            </Step>
            <Step number={2} status={createOrderStatus} title="Create order">
                Click on the &quot;create new order&quot; button and make a sell or buy order to start an OTC trade
                process.
            </Step>
            <Step number={3} status={disconnectWalletStatus} title="Disconnect wallet">
                Disconnect the currently connected wallet.
            </Step>
            <Step number={4} status={connectAcceptOrderWalletStatus} title="Connect wallet">
                Choose the other demo wallet to represent another person.
            </Step>
            <Step number={5} status={acceptOrderStatus} title="Accept order">
                Find the created order in the open orders table and click on the &quot;details&quot; link to open it.
                Once inside, accept the order to start an OTC trade between two parties.
            </Step>
            <Step number={6} status={simulateTgeStatus} title="Simulate TGE & distribution">
                Simulate token generation event and distribute created tokens to the seller, so he can keep his end of
                the deal by sending those tokens to the buyer.
                <span className="u-display-block">
                    {isSimuateTgeButtonDisabled ? (
                        <Button className="u-margin-top-small" disabled={isSimuateTgeButtonDisabled}>
                            Simulate TGE
                        </Button>
                    ) : (
                        <PrimaryButton className="u-margin-top-small" onClick={simulateTge}>
                            Simulate TGE
                        </PrimaryButton>
                    )}
                </span>
            </Step>
            <Step number={7} status={switchToSellerWalletStatus} title="Switch to seller wallet">
                In case you are connected to the buyer wallet, disconnect from it and connect to the seller wallet.
            </Step>
            <Step number={8} status={sendTokensStatus} title="Send tokens">
                To send tokens to the smart contract you need to open the order page and click on &quot;send
                tokens&quot; button.
            </Step>
            <Step number={9} status={disconnectSellerWalletStatus} title="Disconnect seller wallet">
                Disconnect the currently connected wallet.
            </Step>
            <Step number={10} status={connectBuyerWalletStatus} title="Connect buyer wallet">
                Connect the buyer wallet in order to claim your tokens from the smart contract.
            </Step>
            <Step number={11} status={claimTokensStatus} title="Claim tokens">
                Once again go to the order page and claim your tokens.
            </Step>
        </ul>
    );
};

export default CompletedSteps;
