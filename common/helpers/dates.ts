import { format } from 'date-fns';

export const getFormattedDateFromTimestamp = (timestamp: number) => format(timestamp, 'yyyy-MM-dd HH:mm:ss');
