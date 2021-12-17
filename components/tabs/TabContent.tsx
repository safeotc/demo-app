import React, { useEffect } from 'react';

interface TabContentProps {
    isOpened: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

const TabContent: React.FC<TabContentProps> = ({ isOpened, children, onOpen, onClose }) => {
    useEffect(() => {
        isOpened && !!onOpen && onOpen();

        return () => {
            !!onClose && onClose();
        };
    }, [isOpened, onOpen, onClose]);

    return isOpened ? <>{children}</> : null;
};

export default TabContent;
