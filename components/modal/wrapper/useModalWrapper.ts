import { useRef } from 'react';

const useModalWrapper = (onCloseRequest: () => void) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    let activeMouseElement: EventTarget | null;

    const storeActiveMouseElement = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        activeMouseElement = e.target;
    };

    const closeModalIfMouseDownMouseClickElementsMatch = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const mouseDownIsWrapper = activeMouseElement === wrapperRef.current;
        const mouseUpIsWrapper = e.target === wrapperRef.current;
        mouseDownIsWrapper && mouseUpIsWrapper && onCloseRequest();
    };

    return {
        wrapperRef,
        storeActiveMouseElement,
        closeModalIfMouseDownMouseClickElementsMatch,
    };
};

export default useModalWrapper;
