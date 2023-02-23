import { useContext } from 'react';
import { DemoContext } from '../../../../../demo/DemoProvider';

const useSendTokensButton = () => {
    const { completedSteps } = useContext(DemoContext);
    const wereTokensDistributed = completedSteps.includes('simulate_tge');
    const showTokensNeedToBeDistributedAlert = !wereTokensDistributed;
    const isSendButtonDisabled = !wereTokensDistributed;
    return { showTokensNeedToBeDistributedAlert, isSendButtonDisabled };
};

export default useSendTokensButton;
