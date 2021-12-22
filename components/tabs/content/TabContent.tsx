import React from 'react';
import useTabContent from './useTabContent';

interface TabContentProps {
    isOpened: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

const TabContent: React.FC<TabContentProps> = ({ isOpened, children, onOpen, onClose }) => {
    useTabContent(isOpened, onOpen, onClose);
    return isOpened ? <>{children}</> : null;
};

export default TabContent;
