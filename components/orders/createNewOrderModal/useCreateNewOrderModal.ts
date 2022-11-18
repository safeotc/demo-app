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
    const { finishStep } = useContext(DemoContext);
    const showResultAndCloseModalOnSuccess: OnProcessed = (success) => {
        if (success) {
            closeModal();
            addSuccessAlert('Order was added successfully.');
            finishStep(
                'create_order',
                2,
                'Wow! Nice... You have just created an order. Now it is time for you to pretend you are someone else. Switch to another wallet and accept the order you have just created.'
            );
            return;
        }
        addDangerAlert('There was an error while creating an order.');
    };

    return { isTabActive, changeTab, showResultAndCloseModalOnSuccess };
};

export default useCreateNewOrderModal;
