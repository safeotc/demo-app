import { useCallback, useContext, useMemo } from 'react';
import useStateWithUpdate from '../../common/hooks/useStateWithUpdate';
import Order from '../../models/Order';
import { AlertContent } from '../alerts/Alert';
import { AlertsContext } from '../alerts/AlertsProvider';
import { WalletContext } from '../wallet/WalletProvider';
import { DemoStep, DemoWallet } from './useDemo';

interface UseProgressData {
    completedSteps: DemoStep[];
    order: Order | null;
}

export interface CompletedStepsUpdater {
    onConnected: () => void;
    onDisconnected: () => void;
    onOrderCreated: (order: Order) => void;
    onOrderCanceled: (orderId: string) => void;
    onOrderAccepted: (order: Order) => void;
    onSimulateTge: () => void;
}

const useProgress = (wallet: DemoWallet) => {
    const [{ completedSteps, order }, , updateProgressData] = useStateWithUpdate<UseProgressData>({
        completedSteps: [],
        order: null,
    });

    const { isConnected } = useContext(WalletContext);

    const isStepCompleted = useCallback(
        (step: DemoStep) => !!completedSteps.find((cS) => cS === step),
        [completedSteps]
    );

    const { addSuccessAlert, addDangerAlert } = useContext(AlertsContext);

    const finishStep = useCallback(
        (steps: DemoStep | DemoStep[], stepNumber: number, alertMessage: AlertContent) => {
            updateProgressData({ completedSteps: [...completedSteps, ...(Array.isArray(steps) ? steps : [steps])] });
            const alertContent = (
                <>
                    <b>Step {stepNumber}/11 completed</b>
                    <br />
                    {alertMessage}
                </>
            );
            addSuccessAlert(alertContent, 10000);
        },
        [updateProgressData, completedSteps, addSuccessAlert]
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
                    Check &quot;demo settings&quot; to find out what your next move should be.
                </>,
                10000
            );
        },
        [updateProgressData, completedSteps, addDangerAlert]
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
        const orderWalletAddress = order?.type === 'buy' ? order.buyer : order?.type === 'sell' ? order.seller : null;
        const isCreateOrderWalletSelected = wallet.address === orderWalletAddress;
        const isAcceptOrderWalletSelected = wallet.address !== orderWalletAddress;
        const isSellerWalletSelected = !!order && order.seller === wallet.address;
        const isSellerWalletConnected = isConnected && isSellerWalletSelected;

        return {
            onConnected: () => {
                if (!isStepCompleted('connect_create_order_wallet')) {
                    finishStep(
                        'connect_create_order_wallet',
                        1,
                        'You have successfully connected your wallet. Now make an OTC order.'
                    );
                    return;
                }
                if (!isStepCompleted('connect_accept_order_wallet')) {
                    isCreateOrderWalletSelected && unfinishStep('disconnect_wallet');
                    isAcceptOrderWalletSelected &&
                        finishStep(
                            'connect_accept_order_wallet',
                            4,
                            'Hello other guy! Head over to open orders and accept the order that was created earlier by someone else.'
                        );
                    return;
                }
                if (
                    isSellerWalletSelected &&
                    isStepCompleted('simulate_tge') &&
                    !isStepCompleted('switch_to_seller_wallet')
                ) {
                    finishStep(
                        'switch_to_seller_wallet',
                        7,
                        'Hello seller! It is time for you to keep your end of the deal and send your tokens to the smart contract.'
                    );
                    return;
                }
            },
            onDisconnected: () => {
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
                    isAcceptOrderWalletSelected && unfinishStep('connect_accept_order_wallet');
                    return;
                }

                if (isStepCompleted('switch_to_seller_wallet') && !isStepCompleted('send_tokens')) {
                    unfinishStep('switch_to_seller_wallet');
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
                if (isSellerWalletConnected) {
                    completedStepsCount = 7;
                    completedSteps.push('switch_to_seller_wallet');
                    completedStepText =
                        'Tokens were just sent to your address. Head over to the order page and distribute the tokens to the smart contract and claim your money!';
                }
                finishStep(completedSteps, completedStepsCount, completedStepText);
            },
        };
    }, [isStepCompleted, finishStep, unfinishStep, order, updateProgressData, wallet, isConnected]);

    return { completedSteps, completedStepsUpdater, order };
};

export default useProgress;
