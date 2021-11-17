import { useRouter } from 'next/dist/client/router';
import { useCallback } from 'react';

type MatchingRoutes = string | string[];
export type ItemRouteMapper<TItem> = [TItem, MatchingRoutes][];

const useRouteActiveItem = <TItem>(mapper: ItemRouteMapper<TItem>) => {
    const { route } = useRouter();

    const isItemActive = useCallback(
        (item: TItem) => {
            const mapperEntry = mapper.find((entry) => entry[0] === item);
            if (!mapperEntry) {
                return false;
            }
            const routesToMatch = mapperEntry[1];
            return !Array.isArray(routesToMatch)
                ? routesToMatch === route
                : !!routesToMatch.find((rTM) => rTM === route);
        },
        [mapper, route]
    );

    return { isItemActive };
};

export default useRouteActiveItem;
