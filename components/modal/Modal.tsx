import React from 'react';
import Portal from '../Portal';
import { MODALS_ELEMENT_ID } from '../../common/constants/dom';
import ModalContainer from './container/ModalContainer';
import ModalWrapper from './wrapper/ModalWrapper';
import useModal from './useModal';

type ModalSize = 's' | 'm' | 'l' | 'xl';

export interface ModalProps {
    isOpened: boolean;
    onCloseRequest: () => void;
    size: ModalSize;
    contentProps?: React.HTMLAttributes<HTMLDivElement>;
}

const Modal: React.FC<ModalProps> = ({ children, isOpened, size, contentProps, onCloseRequest }) => {
    const { onWrapperEnter, onWrapperExited, isContainerOpened } = useModal(isOpened);

    return (
        <Portal elementId={MODALS_ELEMENT_ID}>
            <ModalWrapper
                isOpened={isOpened}
                onCloseRequest={onCloseRequest}
                onEnter={onWrapperEnter}
                onExited={onWrapperExited}
            >
                <ModalContainer
                    isOpened={isContainerOpened}
                    onCloseRequest={onCloseRequest}
                    size={size}
                    contentProps={contentProps}
                >
                    {children}
                </ModalContainer>
            </ModalWrapper>
        </Portal>
    );
};

export default Modal;
