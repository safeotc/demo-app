import React from 'react';
import BinanceSmartChainIcon from '../../components/icons/networks/BinanceSmartChainIcon';
import EthereumIcon from '../../components/icons/networks/EthereumIcon';
import PolygonIcon from '../../components/icons/networks/PolygonIcon';
import { NetworkId } from '../../components/wallet/useWallet';

export const NETWORKS: { icon: JSX.Element; name: NetworkId }[] = [
    { icon: <EthereumIcon />, name: 'Ethereum' },
    { icon: <BinanceSmartChainIcon />, name: 'Binance Smart Chain' },
    { icon: <PolygonIcon />, name: 'Polygon' },
];
