import {
    ROUTE_HOME,
    ROUTE_OTC_MARKETS,
    ROUTE_NFT_MARKETS,
    ROUTE_ORDERS,
    ROUTE_ORDERS_ACTIVE,
    ROUTE_ORDERS_COMPLETED,
    ROUTE_ORDERS_OPEN,
    ROUTE_VOTING,
} from '../../../common/constants/routes';
import useRouteActiveItem, { ItemRouteMapper } from '../../../common/hooks/useRouteActiveItem';

type MenuItem = 'orders' | 'otcMarkets' | 'nftMarkets' | 'voting';

const menuItemRoutesMapper: ItemRouteMapper<MenuItem> = [
    ['orders', [ROUTE_HOME, ROUTE_ORDERS, ROUTE_ORDERS_OPEN, ROUTE_ORDERS_ACTIVE, ROUTE_ORDERS_COMPLETED]],
    ['otcMarkets', ROUTE_OTC_MARKETS],
    ['nftMarkets', ROUTE_NFT_MARKETS],
    ['voting', ROUTE_VOTING],
];

const useNav = () => {
    const { isItemActive } = useRouteActiveItem(menuItemRoutesMapper);
    return { isItemActive };
};

export default useNav;
