import { useCallback, useContext, useMemo } from 'react';
import useStateWithUpdate from '../../common/hooks/useStateWithUpdate';
import Order from '../../models/Order';
import { AlertContent } from '../alerts/Alert';
import { AlertsContext } from '../alerts/AlertsProvider';
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
}

const useProgress = (wallet: DemoWallet) => {
    const [{ completedSteps, order }, , updateProgressData] = useStateWithUpdate<UseProgressData>({
        completedSteps: [],
        order: null,
    });

    const isStepCompleted = useCallback(
        (step: DemoStep) => !!completedSteps.find((cS) => cS === step),
        [completedSteps]
    );

    const { addSuccessAlert, addDangerAlert } = useContext(AlertsContext);

    const finishStep = useCallback(
        (step: DemoStep, stepNumber: number, alertMessage: AlertContent) => {
            updateProgressData({ completedSteps: [...completedSteps, step] });
            const alertContent = (
                <>
                    <b>Step {stepNumber}/10 completed</b>
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
    */

    const completedStepsUpdater: CompletedStepsUpdater = useMemo(() => {
        const orderWalletAddress = order?.type === 'buy' ? order.buyer : order?.type === 'sell' ? order.seller : null;
        const isCreateOrderWalletConnected = wallet.address === orderWalletAddress;
        const isAcceptOrderWalletConnected = wallet.address !== orderWalletAddress;

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
                    isCreateOrderWalletConnected && unfinishStep('disconnect_wallet');
                    isAcceptOrderWalletConnected &&
                        finishStep(
                            'connect_accept_order_wallet',
                            4,
                            'Hello other guy! Head over to open orders and accept the order that was created earlier by someone else.'
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
                    isAcceptOrderWalletConnected && unfinishStep('connect_accept_order_wallet');
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
        };
    }, [isStepCompleted, finishStep, unfinishStep, order, updateProgressData, wallet]);

    return { completedSteps, completedStepsUpdater, order };
};

export default useProgress;
