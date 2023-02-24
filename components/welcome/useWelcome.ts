import { useCallback, useEffect, useState } from 'react';

const useWelcome = () => {
    const [isOpened, setIsOpened] = useState(false);
    const openModal = useCallback(() => setIsOpened(true), [setIsOpened]);
    const closeModal = useCallback(() => setIsOpened(false), [setIsOpened]);

    useEffect(() => {
        const openModalTimeoutId = setTimeout(openModal, 500);
        return () => {
            clearTimeout(openModalTimeoutId);
        };
    }, [openModal]);

    return { isOpened, closeModal };
};

export default useWelcome;
