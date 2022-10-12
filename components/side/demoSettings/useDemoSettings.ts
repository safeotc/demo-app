import { useState } from 'react';

const useDemoSettings = () => {
    const [isOpened, setIsOpened] = useState(false);
    const showModal = () => setIsOpened(true);
    const hideModal = () => setIsOpened(false);

    return { isOpened, showModal, hideModal };
};

export default useDemoSettings;
