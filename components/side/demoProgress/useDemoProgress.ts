import { useCallback, useContext, useState } from 'react';
import { DemoContext } from '../../demo/DemoProvider';

const useDemoProgress = () => {
    const { completedSteps, isDemoProgressButtonHighlighted, unhighlightDemoProgressButton } = useContext(DemoContext);
    const [isOpened, setIsOpened] = useState(false);
    const showModalAndUnhighlightButton = useCallback(() => {
        unhighlightDemoProgressButton();
        setIsOpened(true);
    }, [unhighlightDemoProgressButton, setIsOpened]);
    const hideModal = useCallback(() => setIsOpened(false), [setIsOpened]);

    return {
        isOpened,
        showModalAndUnhighlightButton,
        hideModal,
        completedSteps,
        isDemoProgressButtonHighlighted,
    };
};

export default useDemoProgress;
