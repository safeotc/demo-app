import { useContext } from 'react';
import { DemoContext } from '../../../../../demo/DemoProvider';

const useClaimTokensButton = () => {
    const { completedSteps } = useContext(DemoContext);
    const wereTokensDistributed = completedSteps.includes('simulate_tge');
    const wereTokensSent = completedSteps.includes('send_tokens');
    const showTokensNeedToBeDistributedAlert = !wereTokensDistributed;
    const showTokensNeedToBeSentAlert = wereTokensDistributed && !wereTokensSent;
    const isClaimButtonDisabled = !wereTokensDistributed || !wereTokensSent;
    return { showTokensNeedToBeDistributedAlert, showTokensNeedToBeSentAlert, isClaimButtonDisabled };
};

export default useClaimTokensButton;
