import { format } from 'date-fns';

const useOrderHistory = () => {
    const getFormattedDateFromTimestamp = (timestamp: number) => format(timestamp, 'yyyy-MM-dd HH:mm:ss');

    return { getFormattedDateFromTimestamp };
};

export default useOrderHistory;
