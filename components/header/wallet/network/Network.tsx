import React from 'react';
import { NETWORKS } from '../../../../common/constants/networks';
import { preventDefaultOnEnterOrSpace } from '../../../../common/helpers/keyboard';
import Button from '../../../forms/buttons/Button';
import ButtonText from '../../../forms/buttons/ButtonText';
import DropdownDownArrowIcon from '../../../icons/DropdownDownArrowIcon';
import FlatIcon from '../../../icons/FlatIcon';
import Popover from '../../../popover/Popover';
import { NetworkId } from '../../../wallet/useWallet';
import useNetwork from './useNetwork';

interface NetworkProps {
    network: NetworkId;
    switchNetwork: (network: NetworkId) => void;
}

const Network: React.FC<NetworkProps> = ({ network, switchNetwork }) => {
    const {
        isNetworkPopoverOpened,
        closeNetworkPopover,
        toggleNetworkPopover,
        switchNetworkAndClosePopover,
        switchNetworkAndClosePopoverOnEnterOrSpace,
        currentNetworkDisplay,
    } = useNetwork(network, switchNetwork);

    const popover = (
        <ul className="c-network-list">
            {NETWORKS.map(({ name, icon }, i) => (
                <li
                    key={i}
                    className="c-network-list__item"
                    tabIndex={0}
                    onClick={() => switchNetworkAndClosePopover(name)}
                    onKeyDown={preventDefaultOnEnterOrSpace}
                    onKeyUp={(e) => switchNetworkAndClosePopoverOnEnterOrSpace(e, name)}
                >
                    <span>{name}</span>
                    {icon}
                </li>
            ))}
        </ul>
    );

    return (
        <Popover
            isOpened={isNetworkPopoverOpened}
            popover={popover}
            onCloseRequest={closeNetworkPopover}
            position="bottomRight"
            positionOn={[
                ['base', 'topRight'],
                ['s', 'topRight'],
            ]}
        >
            <Button
                iconOnlyOn={['base', 'm']}
                icon={currentNetworkDisplay?.icon || <FlatIcon icon="share" />}
                className="u-margin-left-small"
                inlineOnMobile={true}
                addChildrenWithoutWrapping={true}
                onClick={toggleNetworkPopover}
            >
                <ButtonText className="u-text-ellipsis" style={{ maxWidth: '6rem' }}>
                    {currentNetworkDisplay?.name || 'Select network'}
                </ButtonText>
                <DropdownDownArrowIcon />
            </Button>
        </Popover>
    );
};

export default Network;
