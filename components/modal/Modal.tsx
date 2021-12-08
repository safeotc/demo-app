import React from 'react';
import Portal from '../Portal';
import { MODALS_ELEMENT_ID } from '../../common/constants/dom';
import ModalContainer from './container/ModalContainer';
import ModalWrapper from './wrapper/ModalWrapper';
import useModal from './useModal';

export interface ModalProps {
    isOpened: boolean;
    onCloseRequest: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpened, onCloseRequest }) => {
    const { onWrapperEnter, onWrapperExited, isContainerOpened } = useModal(isOpened);

    return (
        <Portal elementId={MODALS_ELEMENT_ID}>
            <ModalWrapper
                isOpened={isOpened}
                onCloseRequest={onCloseRequest}
                onEnter={onWrapperEnter}
                onExited={onWrapperExited}
            >
                <ModalContainer isOpened={isContainerOpened} onCloseRequest={onCloseRequest}>
                    {children}
                </ModalContainer>
            </ModalWrapper>
        </Portal>
    );
};

export default Modal;
