import React, { useEffect, useState } from 'react';

interface TabContentProps {
    isOpened: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

const TabContent: React.FC<TabContentProps> = ({ isOpened, children, onOpen, onClose }) => {
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

    return isOpened ? <>{children}</> : null;
};

export default TabContent;
