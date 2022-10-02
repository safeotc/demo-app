import React from 'react';
import useTabContent from './useTabContent';

interface TabContentProps {
    isOpened: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    children: React.ReactNode;
}

const TabContent = ({ isOpened, children, onOpen, onClose }: TabContentProps) => {
    useTabContent(isOpened, onOpen, onClose);
    return isOpened ? <>{children}</> : null;
};

export default TabContent;
