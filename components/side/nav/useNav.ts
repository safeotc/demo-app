import {
    ROUTE_HOME,
    ROUTE_MARKETS,
    ROUTE_ORDERS,
    ROUTE_ORDERS_ACTIVE,
    ROUTE_ORDERS_COMPLETED,
    ROUTE_ORDERS_OPEN,
    ROUTE_VOTING,
} from '../../../common/constants/routes';
import useRouteActiveItem, { ItemRouteMapper } from '../../../common/hooks/useRouteActiveItem';

type MenuItem = 'orders' | 'markets' | 'voting';

const menuItemRoutesMapper: ItemRouteMapper<MenuItem> = [
    ['orders', [ROUTE_HOME, ROUTE_ORDERS, ROUTE_ORDERS_OPEN, ROUTE_ORDERS_ACTIVE, ROUTE_ORDERS_COMPLETED]],
    ['markets', ROUTE_MARKETS],
    ['voting', ROUTE_VOTING],
];

const useNav = () => {
    const { isItemActive } = useRouteActiveItem(menuItemRoutesMapper);
    return { isItemActive };
};

export default useNav;