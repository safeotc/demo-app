import { useEffect, useState } from 'react';

const useTabContent = (isOpened: boolean, onOpen?: () => void, onClose?: () => void) => {
    const [previousIsOpened, setPreviousIsOpened] = useState(!isOpened);

    // handle open
    useEffect(() => {
        if (!isOpened || previousIsOpened) {
            return;
        }
        !!onOpen && onOpen();
        setPreviousIsOpened(true);
    }, [isOpened, previousIsOpened, onOpen, setPreviousIsOpened]);

    // handle close
    useEffect(() => {
        if (isOpened || !previousIsOpened) {
            return;
        }
        !!onClose && onClose();
        setPreviousIsOpened(false);
    }, [isOpened, previousIsOpened, onClose, setPreviousIsOpened]);
};

export default useTabContent;
