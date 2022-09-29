import AvalancheIcon from '../../components/icons/currencies/AvalancheIcon';
import ChainlinkIcon from '../../components/icons/currencies/ChainlinkIcon';
import ApeCoinIcon from '../../components/icons/currencies/ChainlinkIcon';
import FantomIcon from '../../components/icons/currencies/FantomIcon';
import PolkadotIcon from '../../components/icons/currencies/PolkadotIcon';
import SynthetixNetworkIcon from '../../components/icons/currencies/SynthetixNetworkIcon';
import UniswapIcon from '../../components/icons/currencies/UniswapIcon';

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

export const CURRENCIES: Currency[] = [
    CURRENCY_APECOIN,
    CURRENCY_AVALANCHE,
    CURRENCY_CHAINLINK,
    CURRENCY_FANTOM,
    CURRENCY_POLKADOT,
    CURRENCY_SYNTHETIX_NETWORK,
    CURRENCY_UNISWAP,
].sort((a, b) => a.name.localeCompare(b.name));
