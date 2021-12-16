import { useCallback, useState } from 'react';

type CreateNewOrderModalTab = 'buy' | 'sell';

const useCreateNewOrderModal = () => {
    const [activeTab, setActiveTab] = useState<CreateNewOrderModalTab>('buy');
    const isTabActive = useCallback((tab: CreateNewOrderModalTab) => activeTab === tab, [activeTab]);
    const changeTab = useCallback((tab: CreateNewOrderModalTab) => () => setActiveTab(tab), [setActiveTab]);

    return { isTabActive, changeTab };
};

export default useCreateNewOrderModal;
