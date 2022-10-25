import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { DemoContext } from '../demo/DemoProvider';

const useWelcome = () => {
    const { wasWelcomeScreenDisplayed, setWasWelcomeScreenDisplayed } = useContext(DemoContext);
    const wasWelcomeScreenDisplayedRef = useRef(wasWelcomeScreenDisplayed);

    const [isOpened, setIsOpened] = useState(false);
    const openModal = useCallback(() => setIsOpened(true), [setIsOpened]);
    const closeModal = useCallback(() => {
        setWasWelcomeScreenDisplayed(true);
        setIsOpened(false);
    }, [setWasWelcomeScreenDisplayed, setIsOpened]);

    useEffect(() => {
        if (wasWelcomeScreenDisplayedRef.current) {
            return;
        }

        const openModalTimeoutId = setTimeout(openModal, 1000);

        return () => {
            clearTimeout(openModalTimeoutId);
        };
    }, [wasWelcomeScreenDisplayedRef, openModal]);

    return { isOpened, closeModal };
};

export default useWelcome;
