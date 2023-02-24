import { useContext, useState } from 'react';
import { DemoContext } from '../../demo/DemoProvider';

const useDemoProgress = () => {
    const [isOpened, setIsOpened] = useState(false);
    const showModal = () => setIsOpened(true);
    const hideModal = () => setIsOpened(false);
    const { completedSteps } = useContext(DemoContext);

    return {
        isOpened,
        showModal,
        hideModal,
        completedSteps,
    };
};

export default useDemoProgress;
