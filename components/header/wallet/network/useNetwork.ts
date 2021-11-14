import { useCallback, useContext, useMemo, useState } from 'react';
import { NETWORKS } from '../../../../common/constants/networks';
import { wasEnterOrSpacePressed } from '../../../../common/helpers/keyboard';
import { AlertsContext } from '../../../alerts/AlertsProvider';
import { NetworkId } from '../../../wallet/useWallet';

const useNetwork = (currentNetwork: NetworkId, switchNetwork: (network: NetworkId) => void) => {
    const { addSuccessAlert } = useContext(AlertsContext);
    const [isNetworkPopoverOpened, setIsNetworkPopoverOpened] = useState(false);

    const toggleNetworkPopover = useCallback(() => setIsNetworkPopoverOpened((iO) => !iO), [setIsNetworkPopoverOpened]);
    const closeNetworkPopover = useCallback(() => setIsNetworkPopoverOpened(false), [setIsNetworkPopoverOpened]);

    const switchNetworkAndClosePopover = useCallback(
        (network: NetworkId) => {
            switchNetwork(network);
            setIsNetworkPopoverOpened(false);
            addSuccessAlert(`Network was changed to '${network}'.`);
        },
        [switchNetwork, setIsNetworkPopoverOpened, addSuccessAlert]
    );
    const switchNetworkAndClosePopoverOnEnterOrSpace = useCallback(
        (e: React.KeyboardEvent<HTMLElement>, network: NetworkId) => {
            wasEnterOrSpacePressed(e) && switchNetworkAndClosePopover(network);
        },
        [switchNetworkAndClosePopover]
    );

    let currentNetworkDisplay = useMemo(() => NETWORKS.find((n) => n.name === currentNetwork), [currentNetwork]);

    return {
        isNetworkPopoverOpened,
        toggleNetworkPopover,
        closeNetworkPopover,
        switchNetworkAndClosePopover,
        switchNetworkAndClosePopoverOnEnterOrSpace,
        currentNetworkDisplay,
    };
};

export default useNetwork;
