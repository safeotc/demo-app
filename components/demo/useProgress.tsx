import { useCallback, useContext, useMemo } from 'react';
import useStateWithUpdate from '../../common/hooks/useStateWithUpdate';
import Order from '../../models/Order';
import { AlertContent } from '../alerts/Alert';
import { AlertsContext } from '../alerts/AlertsProvider';
import { WalletContext } from '../wallet/WalletProvider';
import { DemoStep } from './useDemo';

interface UseProgressData {
    completedSteps: DemoStep[];
    order: Order | null;
}

export interface CompletedStepsUpdater {
    onConnected: (address: string) => void;
    onDisconnected: (address: string) => void;
    onOrderCreated: (order: Order) => void;
    onOrderCanceled: (orderId: string) => void;
    onOrderAccepted: (order: Order) => void;
    onSimulateTge: () => void;
    onTokensSent: (order: Order) => void;
    onTokensClaimed: (order: Order) => void;
}

const useProgress = (highlightDemoProgressButton: () => void) => {
    const [{ completedSteps, order }, , updateProgressData] = useStateWithUpdate<UseProgressData>({
        completedSteps: [],
        order: null,
    });

    const { isConnected, address: connectedAddress } = useContext(WalletContext);

    const isStepCompleted = useCallback(
        (step: DemoStep) => !!completedSteps.find((cS) => cS === step),
        [completedSteps]
    );

    const { addSuccessAlert, addDangerAlert } = useContext(AlertsContext);

    const finishStep = useCallback(
        (steps: DemoStep | DemoStep[], stepNumber: number, alertMessage: AlertContent, skipHighlighting?: boolean) => {
            updateProgressData({ completedSteps: [...completedSteps, ...(Array.isArray(steps) ? steps : [steps])] });
            const alertContent = (
                <>
                    <b>Step {stepNumber}/11 completed</b>
                    <br />
                    {alertMessage}
                </>
            );
            addSuccessAlert(alertContent, 5000);
            !skipHighlighting && highlightDemoProgressButton();
        },
        [updateProgressData, completedSteps, addSuccessAlert, highlightDemoProgressButton]
    );

    const unfinishStep = useCallback(
        (step: DemoStep) => {
            const stepIdx = completedSteps.indexOf(step);
            if (stepIdx < 0) {
                return;
            }

            const updatedCompletedSteps = [...completedSteps];
            updatedCompletedSteps.splice(stepIdx, 1);
            updateProgressData({ completedSteps: updatedCompletedSteps });

            addDangerAlert(
                <>
                    Oh no! You moved back :(
                    <br />
                    Check &quot;demo progress&quot; to find out what your next move should be.
                </>,
                5000
            );
            highlightDemoProgressButton();
        },
        [updateProgressData, completedSteps, addDangerAlert, highlightDemoProgressButton]
    );

    /*
    | 'connect_create_order_wallet'
    | 'create_order'
    | 'disconnect_wallet'
    | 'connect_accept_order_wallet'
    | 'accept_order'
    | 'simulate_tge'
    | 'switch_to_seller_wallet'
    | 'send_tokens'
    | 'disconnect_seller_wallet'
    | 'connect_buyer_wallet';
    | 'claim_tokens'
    */

    const completedStepsUpdater: CompletedStepsUpdater = useMemo(() => {
        const orderMakerAddress = order?.type === 'buy' ? order.buyer : order?.type === 'sell' ? order.seller : null;
        const isCreateOrderWallet = (address: string) => address === orderMakerAddress;
        const isSellerWallet = (address: string) => order?.seller === address;

        return {
            onConnected: (address: string) => {
                if (!isStepCompleted('connect_create_order_wallet')) {
                    finishStep(
                        'connect_create_order_wallet',
                        1,
                        'You have successfully connected your wallet. Now make an OTC order.'
                    );
                    return;
                }

                if (!isStepCompleted('connect_accept_order_wallet')) {
                    if (isCreateOrderWallet(address)) {
                        unfinishStep('disconnect_wallet');
                        return;
                    }
                    finishStep(
                        'connect_accept_order_wallet',
                        4,
                        'Hello other guy! Head over to open orders and accept the order that was created earlier by someone else.'
                    );
                    return;
                }

                if (!isStepCompleted('switch_to_seller_wallet')) {
                    isSellerWallet(address) &&
                        isStepCompleted('simulate_tge') &&
                        finishStep(
                            'switch_to_seller_wallet',
                            7,
                            'Hello seller! It is time for you to keep your end of the deal and send your tokens to the smart contract.'
                        );
                    return;
                }

                if (!isStepCompleted('connect_buyer_wallet')) {
                    if (!isStepCompleted('disconnect_seller_wallet')) {
                        return;
                    }
                    if (isSellerWallet(address)) {
                        unfinishStep('disconnect_seller_wallet');
                        return;
                    }
                    finishStep(
                        'connect_buyer_wallet',
                        10,
                        'Great! Hello buyer! Only thing left for you to do, is to claim your tokens!'
                    );
                    return;
                }
            },
            onDisconnected: (address) => {
                if (!isStepCompleted('create_order')) {
                    unfinishStep('connect_create_order_wallet');
                    return;
                }

                if (!isStepCompleted('disconnect_wallet')) {
                    finishStep(
                        'disconnect_wallet',
                        3,
                        'Wallet was disconnected successfully. Switch to another wallet in order to accept the newly created order.'
                    );
                    return;
                }

                if (!isStepCompleted('accept_order')) {
                    const isAcceptOrderWallet = !isCreateOrderWallet(address);
                    isAcceptOrderWallet && unfinishStep('connect_accept_order_wallet');
                    return;
                }

                if (!isStepCompleted('send_tokens')) {
                    isStepCompleted('switch_to_seller_wallet') && unfinishStep('switch_to_seller_wallet');
                    return;
                }

                if (!isStepCompleted('disconnect_seller_wallet')) {
                    isSellerWallet(address) &&
                        finishStep(
                            'disconnect_seller_wallet',
                            9,
                            'Great! Seller kept his part of the deal, got rewarded and is now done with the process. Now connect as a buyer and claim your tokens!'
                        );
                    return;
                }

                if (!isStepCompleted('claim_tokens')) {
                    unfinishStep('connect_buyer_wallet');
                    return;
                }
            },
            onOrderCreated: (order) => {
                updateProgressData({ order });
                finishStep(
                    'create_order',
                    2,
                    'Wow! Nice... You have just created an order. Now it is time for you to pretend you are someone else. Switch to another wallet and accept the order you have just created.'
                );
            },
            onOrderCanceled: (orderId) => {
                const wasProgressOrderCanceled = order?.id === orderId;
                if (!wasProgressOrderCanceled) {
                    return;
                }
                updateProgressData({ order: null });
                unfinishStep('create_order');
            },
            onOrderAccepted: (order) => {
                finishStep(
                    'accept_order',
                    5,
                    'Great! You have successfully secured an order. Next thing to do, is to simulate token generation event.'
                );
                updateProgressData({ order });
            },
            onSimulateTge: () => {
                const completedSteps: DemoStep[] = ['simulate_tge'];
                let completedStepsCount = 6;
                let completedStepText =
                    'Things are looking good! Tokens were just distributed to the seller. Now connect the wallet you used for selling tokens and send those tokens to the smart contract.';
                if (isConnected && isSellerWallet(connectedAddress)) {
                    completedStepsCount = 7;
                    completedSteps.push('switch_to_seller_wallet');
                    completedStepText =
                        'Tokens were just sent to your address. Head over to the active order tab and distribute the tokens to the smart contract and claim your money!';
                }
                finishStep(completedSteps, completedStepsCount, completedStepText, true);
            },
            onTokensSent: (order) => {
                finishStep(
                    'send_tokens',
                    8,
                    'Congratulations! You kept your part of the deal in return you get to claim all the money deposited in the smart contract! Now connect as a buyer and claim the tokens!'
                );
                updateProgressData({ order });
            },
            onTokensClaimed: (order) => {
                finishStep(
                    'claim_tokens',
                    11,
                    "Congratulations! You did it! You just made an OTC deal and got your tokens! That was easy wasn't it? :)",
                    true
                );
                updateProgressData({ order });
            },
        };
    }, [isStepCompleted, finishStep, unfinishStep, order, updateProgressData, isConnected, connectedAddress]);

    const resetProgress = useCallback(
        () => updateProgressData({ completedSteps: [], order: null }),
        [updateProgressData]
    );

    return { completedSteps, completedStepsUpdater, order, resetProgress };
};

export default useProgress;
