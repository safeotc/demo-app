import { useCallback, useContext, useState } from 'react';
import { AlertsContext } from '../../alerts/AlertsProvider';
import { OnProcessed } from './createNewOrderForm/CreateNewOrderForm';

type CreateNewOrderModalTab = 'buy' | 'sell';

const useCreateNewOrderModal = (closeModal: () => void) => {
    const [activeTab, setActiveTab] = useState<CreateNewOrderModalTab>('buy');
    const isTabActive = useCallback((tab: CreateNewOrderModalTab) => activeTab === tab, [activeTab]);
    const changeTab = useCallback((tab: CreateNewOrderModalTab) => () => setActiveTab(tab), [setActiveTab]);

    const { addSuccessAlert, addDangerAlert } = useContext(AlertsContext);
    const showResultAndCloseModalOnSuccess: OnProcessed = (success) => {
        if (success) {
            closeModal();
            addSuccessAlert('Order was added successfully.');
            return;
        }
        addDangerAlert('There was an error while creating an order.');
    };

    return { isTabActive, changeTab, showResultAndCloseModalOnSuccess };
};

export default useCreateNewOrderModal;
