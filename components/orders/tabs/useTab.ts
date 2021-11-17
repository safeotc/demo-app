import {
    ROUTE_HOME,
    ROUTE_ORDERS,
    ROUTE_ORDERS_ACTIVE,
    ROUTE_ORDERS_COMPLETED,
    ROUTE_ORDERS_OPEN,
} from '../../../common/constants/routes';
import useRouteActiveItem, { ItemRouteMapper } from '../../../common/hooks/useRouteActiveItem';

type OrderTab = 'open' | 'active' | 'completed';

const orderTabRoutesMapper: ItemRouteMapper<OrderTab> = [
    ['open', [ROUTE_HOME, ROUTE_ORDERS, ROUTE_ORDERS_OPEN]],
    ['active', ROUTE_ORDERS_ACTIVE],
    ['completed', ROUTE_ORDERS_COMPLETED],
];

const useTabs = () => {
    const { isItemActive } = useRouteActiveItem(orderTabRoutesMapper);
    return { isItemActive };
};

export default useTabs;
