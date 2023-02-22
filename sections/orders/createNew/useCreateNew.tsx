import Link from 'next/link';
import { useCallback, useContext, useState } from 'react';
import { AlertsContext } from '../../../components/alerts/AlertsProvider';
import { DemoContext } from '../../../components/demo/DemoProvider';

const useCreateNew = () => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const { completedSteps, order } = useContext(DemoContext);
    const { addInfoAlert } = useContext(AlertsContext);
    const tryOpeningModal = useCallback(() => {
        const demoOrderExists = completedSteps.includes('create_order') && !!order;
        if (demoOrderExists) {
            addInfoAlert(
                <>
                    <Link href={`/orders/${order.id}`}>
                        <a className="c-link c-link--info-alert">Demo order</a>
                    </Link>{' '}
                    was already created. To make a progress try accepting the created order.
                </>
            );
            return;
        }
        setIsModalOpened(true);
    }, [order, completedSteps, addInfoAlert, setIsModalOpened]);
    const closeModal = useCallback(() => setIsModalOpened(false), [setIsModalOpened]);

    return { isModalOpened, tryOpeningModal, closeModal };
};

export default useCreateNew;
