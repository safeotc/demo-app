import { useRef } from 'react';
import { wasEscape } from '../../../common/helpers/keyboard';

const useModalWrapper = (isOpened: boolean, onCloseRequest: () => void) => {
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

    const closeOnEscapeKeyIfOpened = (e: React.KeyboardEvent<HTMLDivElement>) =>
        isOpened && wasEscape(e) && onCloseRequest();

    return {
        wrapperRef,
        storeActiveMouseElement,
        closeModalIfMouseDownMouseClickElementsMatch,
        closeOnEscapeKeyIfOpened,
    };
};

export default useModalWrapper;
