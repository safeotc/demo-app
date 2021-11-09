import React from 'react';
import Button from '../../forms/Button';
import FlatIcon from '../../icons/FlatIcon';
import BinanceSmartChainIcon from '../../icons/networks/BinanceSmartChainIcon';
import EthereumIcon from '../../icons/networks/EthereumIcon';
import PolygonIcon from '../../icons/networks/PolygonIcon';
import { NetworkId } from '../../wallet/useWallet';

interface SelectedNetwork {
    icon: JSX.Element;
    name: NetworkId | 'Select network';
}

export const NETWORKS: SelectedNetwork[] = [
    { icon: <EthereumIcon />, name: 'Ethereum' },
    { icon: <BinanceSmartChainIcon />, name: 'Binance Smart Chain' },
    { icon: <PolygonIcon />, name: 'Polygon' },
];

interface NetworkProps {
    network?: NetworkId;
}

const Network: React.FC<NetworkProps> = ({ network }) => {
    const { icon, name }: SelectedNetwork = NETWORKS.find((n) => n.name === network) || {
        icon: <FlatIcon icon="Share" />,
        name: 'Select network',
    };
    return (
        <Button iconOnlyOn={['base', 'm']} icon={icon} className="u-margin-left-small" inlineOnMobile={true}>
            {name}
        </Button>
    );
};

export default Network;
