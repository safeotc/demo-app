import { useCallback, useContext, useEffect, useState } from 'react';
import { DemoContext } from '../demo/DemoProvider';

const useWelcome = () => {
    const [isOpened, setIsOpened] = useState(false);
    const openModal = useCallback(() => setIsOpened(true), [setIsOpened]);
    const { highlightDemoProgressButton } = useContext(DemoContext);
    const closeModalAndHighlightDemoProgressButton = useCallback(() => {
        setIsOpened(false);
        highlightDemoProgressButton();
    }, [setIsOpened, highlightDemoProgressButton]);

    useEffect(() => {
        const openModalTimeoutId = setTimeout(openModal, 500);
        return () => {
            clearTimeout(openModalTimeoutId);
        };
    }, [openModal]);

    return { isOpened, closeModalAndHighlightDemoProgressButton };
};

export default useWelcome;
