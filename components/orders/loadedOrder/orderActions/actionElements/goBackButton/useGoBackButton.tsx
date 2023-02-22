import { useRouter } from 'next/router';
import { ROUTE_ORDERS } from '../../../../../../common/constants/routes';

const useGoBackButton = () => {
    const router = useRouter();
    const goBack = () => router.push(ROUTE_ORDERS);
    return goBack;
};

export default useGoBackButton;
