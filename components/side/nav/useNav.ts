import { useRouter } from 'next/dist/client/router';
import { useCallback } from 'react';

type MenuItem = 'orders' | 'markets' | 'voting';
type MatchingRoute = string | string[];

const MENU_ITEM_ROUTES_MAPPER: [MenuItem, MatchingRoute][] = [
    ['orders', ['/', '/orders', '/orders/open', '/orders/active', '/orders/complete']],
    ['markets', '/markets'],
    ['voting', '/voting'],
];

const useNav = () => {
    const { route } = useRouter();

    const isMenuItemActive = useCallback(
        (menuItem: MenuItem) => {
            const mapEntry = MENU_ITEM_ROUTES_MAPPER.find((mE) => mE[0] === menuItem);
            if (!mapEntry) {
                return false;
            }
            const matchingRoutes = !Array.isArray(mapEntry[1]) ? [mapEntry[1]] : mapEntry[1];
            return !!matchingRoutes.find((mR) => mR === route);
        },
        [route]
    );

    return { isMenuItemActive };
};

export default useNav;
