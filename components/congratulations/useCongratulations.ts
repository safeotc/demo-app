import { useContext, useEffect, useState } from 'react';
import { DemoContext } from '../demo/DemoProvider';

const useCongratulations = () => {
    const [{ width, height }, setWidthHeight] = useState({ width: 0, height: 0 });
    const [showCongratulations, setShowCongratulations] = useState(false);
    const { completedSteps } = useContext(DemoContext);
    const userFinishedDemoApp = completedSteps.includes('claim_tokens');

    // listen for window width & height changes
    useEffect(() => {
        if (!showCongratulations) {
            setWidthHeight({ width: 0, height: 0 });
            return;
        }

        const resizeListener = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            setWidthHeight({ width, height });
        };
        window.addEventListener('resize', resizeListener);
        resizeListener();

        return () => {
            window.removeEventListener('resize', resizeListener);
        };
    }, [setWidthHeight, showCongratulations]);

    // trigger congrats screen 1 second after demo completion!
    useEffect(() => {
        if (!userFinishedDemoApp) {
            return;
        }

        const timeoutId = setTimeout(() => setShowCongratulations(true), 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [userFinishedDemoApp, setShowCongratulations]);

    return { showCongratulations, width, height };
};

export default useCongratulations;
