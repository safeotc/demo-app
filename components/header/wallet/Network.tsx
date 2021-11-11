import React, { useCallback, useState } from 'react';
import { preventDefaultOnEnterOrSpace, wasEnterOrSpacePressed } from '../../../common/helpers/keyboard';
import Button from '../../forms/buttons/Button';
import ButtonText from '../../forms/buttons/ButtonText';
import DropdownDownArrowIcon from '../../icons/DropdownDownArrowIcon';
import FlatIcon from '../../icons/FlatIcon';
import BinanceSmartChainIcon from '../../icons/networks/BinanceSmartChainIcon';
import EthereumIcon from '../../icons/networks/EthereumIcon';
import PolygonIcon from '../../icons/networks/PolygonIcon';
import Popover from '../../popover/Popover';
import { NetworkId } from '../../wallet/useWallet';

interface SelectedNetwork {
    icon: JSX.Element;
    name: NetworkId;
}

export const NETWORKS: SelectedNetwork[] = [
    { icon: <EthereumIcon />, name: 'Ethereum' },
    { icon: <BinanceSmartChainIcon />, name: 'Binance Smart Chain' },
    { icon: <PolygonIcon />, name: 'Polygon' },
];

interface NetworkProps {
    network: NetworkId;
    switchNetwork: (network: NetworkId) => void;
}

const Network: React.FC<NetworkProps> = ({ network, switchNetwork }) => {
    const [isOpened, setIsOpened] = useState(false);
    const togglePopover = useCallback(() => setIsOpened((iO) => !iO), [setIsOpened]);
    const closePopover = useCallback(() => setIsOpened(false), [setIsOpened]);

    const { icon, name } = NETWORKS.find((n) => n.name === network) || {
        icon: <FlatIcon icon="Share" />,
        name: 'Select network',
    };

    const switchNetworkAndClosePopover = (network: NetworkId) => {
        switchNetwork(network);
        setIsOpened(false);
    };

    const switchNetworkAndClosePopoverOnEnterOrSpace = (e: React.KeyboardEvent<HTMLElement>, network: NetworkId) =>
        wasEnterOrSpacePressed(e) && switchNetworkAndClosePopover(network);

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
            isOpened={isOpened}
            popover={popover}
            onCloseRequest={closePopover}
            position="bottomRight"
            positionOn={[
                ['base', 'topRight'],
                ['s', 'topRight'],
            ]}
        >
            <Button
                iconOnlyOn={['base', 'm']}
                icon={icon}
                className="u-margin-left-small"
                inlineOnMobile={true}
                addChildrenWithoutWrapping={true}
                onClick={togglePopover}
            >
                <ButtonText className="u-text-ellipsis" style={{ maxWidth: '5rem' }}>
                    {name}
                </ButtonText>
                <DropdownDownArrowIcon />
            </Button>
        </Popover>
    );
};

export default Network;
