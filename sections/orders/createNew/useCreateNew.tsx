import Link from 'next/link';
import { useCallback, useContext, useState } from 'react';
import { AlertsContext } from '../../../components/alerts/AlertsProvider';
import { DemoContext } from '../../../components/demo/DemoProvider';

const useCreateNew = () => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const { order } = useContext(DemoContext);
    const { addInfoAlert } = useContext(AlertsContext);
    const tryOpeningModal = useCallback(() => {
        const demoOrderExists = !!order;
        if (demoOrderExists) {
            addInfoAlert(
                <>
                    <Link href={`/orders/${order.id}`}>
                        <a className="c-link c-link--info-alert">Demo order</a>
                    </Link>{' '}
                    was already created. Check &quot;demo progress&quot; for further steps.
                </>
            );
            return;
        }
        setIsModalOpened(true);
    }, [order, addInfoAlert, setIsModalOpened]);
    const closeModal = useCallback(() => setIsModalOpened(false), [setIsModalOpened]);

    return { isModalOpened, tryOpeningModal, closeModal };
};

export default useCreateNew;
