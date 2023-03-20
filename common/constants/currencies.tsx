import AceIcon from '../../components/icons/currencies/AceIcon';
import ArbitrumIcon from '../../components/icons/currencies/ArbitrumIcon';
import AvalancheIcon from '../../components/icons/currencies/AvalancheIcon';
import BaseIcon from '../../components/icons/currencies/BaseIcon';
import CelestiaIcon from '../../components/icons/currencies/Celestia';
import ChainlinkIcon from '../../components/icons/currencies/ChainlinkIcon';
import ApeCoinIcon from '../../components/icons/currencies/ChainlinkIcon';
import FantomIcon from '../../components/icons/currencies/FantomIcon';
import PolkadotIcon from '../../components/icons/currencies/PolkadotIcon';
import QuaiNetworkIcon from '../../components/icons/currencies/QuaiNetworkIcon';
import SpaceIdIcon from '../../components/icons/currencies/SpaceIdIcon';
import SuiNetworkIcon from '../../components/icons/currencies/SuiNetworkIcon';
import SynthetixNetworkIcon from '../../components/icons/currencies/SynthetixNetworkIcon';
import UniswapIcon from '../../components/icons/currencies/UniswapIcon';
import ZkSyncIcon from '../../components/icons/currencies/ZkSyncIcon';

interface Currency {
    name: string;
    symbol: string;
    icon: JSX.Element;
}

export const CURRENCY_APECOIN: Currency = {
    name: 'ApeCoin',
    symbol: 'APE',
    icon: <ApeCoinIcon />,
};

export const CURRENCY_AVALANCHE: Currency = {
    name: 'Avalanche',
    symbol: 'AVAX',
    icon: <AvalancheIcon />,
};

export const CURRENCY_CHAINLINK: Currency = {
    name: 'Chainlink',
    symbol: 'LINK',
    icon: <ChainlinkIcon />,
};

export const CURRENCY_FANTOM: Currency = {
    name: 'Fantom',
    symbol: 'FTM',
    icon: <FantomIcon />,
};

export const CURRENCY_POLKADOT: Currency = {
    name: 'Polkadot',
    symbol: 'DOT',
    icon: <PolkadotIcon />,
};

export const CURRENCY_SYNTHETIX_NETWORK: Currency = {
    name: 'Synthetix Network',
    symbol: 'SNX',
    icon: <SynthetixNetworkIcon />,
};

export const CURRENCY_UNISWAP: Currency = {
    name: 'Uniswap',
    symbol: 'UNI',
    icon: <UniswapIcon />,
};

export const CURRENCY_ZKSYNC: Currency = {
    name: 'ZkSync',
    symbol: 'ZKSYNC',
    icon: <ZkSyncIcon />,
};

export const CURRENCY_ACE: Currency = {
    name: 'Ace (Fusionist)',
    symbol: 'ACE',
    icon: <AceIcon />,
};

export const CURRENCY_SPACE_ID: Currency = {
    name: 'Space ID',
    symbol: 'ID',
    icon: <SpaceIdIcon />,
};

export const CURRENCY_ARBITRUM: Currency = {
    name: 'Arbitrum',
    symbol: 'ARB',
    icon: <ArbitrumIcon />,
};

export const CURRENCY_SUI_NETWORK: Currency = {
    name: 'Sui Network',
    symbol: 'SUI',
    icon: <SuiNetworkIcon />,
};

export const CURRENCY_QUAI_NETWORK: Currency = {
    name: 'Quai Network',
    symbol: 'QUAI',
    icon: <QuaiNetworkIcon />,
};

export const CURRENCY_CELESTIA: Currency = {
    name: 'Celestia',
    symbol: 'CELESTIA',
    icon: <CelestiaIcon />,
};

export const CURRENCY_BASE: Currency = {
    name: 'Base',
    symbol: 'BASE',
    icon: <BaseIcon />,
};

export const CURRENCIES: Currency[] = [
    CURRENCY_ACE,
    CURRENCY_ARBITRUM,
    CURRENCY_ZKSYNC,
    CURRENCY_SPACE_ID,
    CURRENCY_SUI_NETWORK,
    CURRENCY_QUAI_NETWORK,
    CURRENCY_CELESTIA,
    CURRENCY_BASE,
].sort((a, b) => a.name.localeCompare(b.name));
