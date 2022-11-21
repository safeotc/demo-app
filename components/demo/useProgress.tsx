import { useCallback, useContext, useState } from 'react';
import { AlertContent } from '../alerts/Alert';
import { AlertsContext } from '../alerts/AlertsProvider';
import { DemoStep } from './useDemo';

const useProgress = () => {
    const [completedSteps, setCompletedSteps] = useState<DemoStep[]>([]);

    const { addSuccessAlert } = useContext(AlertsContext);
    const finishStep = useCallback(
        (step: DemoStep, stepNumber: number, alertMessage: AlertContent) => {
            setCompletedSteps([...completedSteps, step]);
            const alertContent = (
                <>
                    <b>Step {stepNumber}/10 completed</b>
                    <br />
                    {alertMessage}
                </>
            );
            addSuccessAlert(alertContent, 10000);
        },
        [setCompletedSteps, completedSteps, addSuccessAlert]
    );

    return { completedSteps, finishStep };
};

export default useProgress;
