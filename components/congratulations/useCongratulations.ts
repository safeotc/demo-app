import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { ROUTE_HOME } from '../../common/constants/routes';
import { DemoContext } from '../demo/DemoProvider';
import { WalletContext } from '../wallet/WalletProvider';

const useCongratulations = () => {
    const [{ width, height }, setWidthHeight] = useState({ width: 0, height: 0 });
    const [showCongratulations, setShowCongratulations] = useState(false);
    const { disconnect } = useContext(WalletContext);
    const { completedSteps, resetDemoState, highlightDemoProgressButton } = useContext(DemoContext);
    const userFinishedDemoApp = completedSteps.includes('claim_tokens');
    const { push, route } = useRouter();

    const restartDemoApp = () => {
        resetDemoState();
        disconnect();
        highlightDemoProgressButton();
        route !== ROUTE_HOME && push(ROUTE_HOME);
    };

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
            setShowCongratulations(false);
            return;
        }

        const timeoutId = setTimeout(() => setShowCongratulations(true), 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [userFinishedDemoApp, setShowCongratulations]);

    return { showCongratulations, width, height, restartDemoApp };
};

export default useCongratulations;
