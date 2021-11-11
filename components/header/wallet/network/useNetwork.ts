import { useCallback, useMemo, useState } from 'react';
import { NETWORKS } from '../../../../common/constants/networks';
import { wasEnterOrSpacePressed } from '../../../../common/helpers/keyboard';
import { NetworkId } from '../../../wallet/useWallet';

const useNetwork = (currentNetwork: NetworkId, switchNetwork: (network: NetworkId) => void) => {
    const [isNetworkPopoverOpened, setIsNetworkPopoverOpened] = useState(false);

    const toggleNetworkPopover = useCallback(() => setIsNetworkPopoverOpened((iO) => !iO), [setIsNetworkPopoverOpened]);
    const closeNetworkPopover = useCallback(() => setIsNetworkPopoverOpened(false), [setIsNetworkPopoverOpened]);

    const switchNetworkAndClosePopover = useCallback(
        (network: NetworkId) => {
            switchNetwork(network);
            setIsNetworkPopoverOpened(false);
        },
        [switchNetwork, setIsNetworkPopoverOpened]
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
