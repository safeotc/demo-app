import { useContext, useEffect, useState } from 'react';
import { DemoContext } from '../demo/DemoProvider';

const useCongratulations = () => {
    const [showCongratulations, setShowCongratulations] = useState(false);
    const { completedSteps } = useContext(DemoContext);
    const userFinishedDemoApp = completedSteps.includes('claim_tokens');

    useEffect(() => {
        if (!userFinishedDemoApp) {
            return;
        }

        const timeoutId = setTimeout(() => setShowCongratulations(true), 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [userFinishedDemoApp, setShowCongratulations]);

    return showCongratulations;
};

export default useCongratulations;
