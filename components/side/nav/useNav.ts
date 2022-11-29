import {
    ROUTE_HOME,
    ROUTE_MARKETS,
    ROUTE_NFTS,
    ROUTE_ORDERS,
    ROUTE_ORDERS_ACTIVE,
    ROUTE_ORDERS_COMPLETED,
    ROUTE_ORDERS_OPEN,
    ROUTE_ORDERS_ORDER_ID,
    ROUTE_VOTING,
} from '../../../common/constants/routes';
import useRouteActiveItem, { ItemRouteMapper } from '../../../common/hooks/useRouteActiveItem';

type MenuItem = 'orders' | 'markets' | 'nfts' | 'voting';

const menuItemRoutesMapper: ItemRouteMapper<MenuItem> = [
    [
        'orders',
        [
            ROUTE_HOME,
            ROUTE_ORDERS,
            ROUTE_ORDERS_OPEN,
            ROUTE_ORDERS_ACTIVE,
            ROUTE_ORDERS_COMPLETED,
            ROUTE_ORDERS_ORDER_ID,
        ],
    ],
    ['markets', ROUTE_MARKETS],
    ['nfts', ROUTE_NFTS],
    ['voting', ROUTE_VOTING],
];

const useNav = () => {
    const { isItemActive } = useRouteActiveItem(menuItemRoutesMapper);
    return { isItemActive };
};

export default useNav;
