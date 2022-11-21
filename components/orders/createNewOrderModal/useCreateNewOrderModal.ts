import { useCallback, useContext, useState } from 'react';
import { AlertsContext } from '../../alerts/AlertsProvider';
import { DemoContext } from '../../demo/DemoProvider';
import { OnProcessed } from './createNewOrderForm/CreateNewOrderForm';

type CreateNewOrderModalTab = 'buy' | 'sell';

const useCreateNewOrderModal = (closeModal: () => void) => {
    const [activeTab, setActiveTab] = useState<CreateNewOrderModalTab>('buy');
    const isTabActive = useCallback((tab: CreateNewOrderModalTab) => activeTab === tab, [activeTab]);
    const changeTab = useCallback((tab: CreateNewOrderModalTab) => () => setActiveTab(tab), [setActiveTab]);

    const { addSuccessAlert, addDangerAlert } = useContext(AlertsContext);
    const { completedStepsUpdater } = useContext(DemoContext);
    const showResultAndCloseModalOnSuccess: OnProcessed = (success, order) => {
        if (success && !!order) {
            closeModal();
            addSuccessAlert('Order was added successfully.');
            completedStepsUpdater.onOrderCreated(order);
            return;
        }
        addDangerAlert('There was an error while creating an order.');
    };

    return { isTabActive, changeTab, showResultAndCloseModalOnSuccess };
};

export default useCreateNewOrderModal;
