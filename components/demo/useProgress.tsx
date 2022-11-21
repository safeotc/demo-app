import { useCallback, useContext, useMemo } from 'react';
import useStateWithUpdate from '../../common/hooks/useStateWithUpdate';
import { AlertContent } from '../alerts/Alert';
import { AlertsContext } from '../alerts/AlertsProvider';
import { DemoStep } from './useDemo';

interface UseProgressData {
    completedSteps: DemoStep[];
}

export interface CompletedStepsUpdater {
    onConnected: () => void;
    onDisconnected: () => void;
    onOrderCreated: () => void;
}

const useProgress = () => {
    const [{ completedSteps }, , updateProgressData] = useStateWithUpdate<UseProgressData>({
        completedSteps: [],
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

    const completedStepsUpdater: CompletedStepsUpdater = useMemo(
        () => ({
            onConnected: () => {
                if (!isStepCompleted('connect_create_order_wallet')) {
                    finishStep(
                        'connect_create_order_wallet',
                        1,
                        'You have successfully connected your wallet. Now make an OTC order.'
                    );
                    return;
                }
            },
            onDisconnected: () => {
                if (!isStepCompleted('create_order')) {
                    unfinishStep('connect_create_order_wallet');
                    return;
                }

                finishStep(
                    'disconnect_wallet',
                    3,
                    'Wallet was disconnected successfully. Switch to another wallet in order to accept the newly created order.'
                );
            },
            onOrderCreated: () => {
                finishStep(
                    'create_order',
                    2,
                    'Wow! Nice... You have just created an order. Now it is time for you to pretend you are someone else. Switch to another wallet and accept the order you have just created.'
                );
            },
        }),
        [isStepCompleted, finishStep, unfinishStep]
    );

    return { completedSteps, completedStepsUpdater };
};

export default useProgress;
