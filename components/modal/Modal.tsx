import React from 'react';
import { MODALS_ELEMENT_ID } from '../../common/constants/dom';
import Portal from '../Portal';

interface ModalProps {
    open: boolean;
    onCloseRequest: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, onCloseRequest, children }) => {
    return (
        <Portal elementId={MODALS_ELEMENT_ID}>
            <div className="c-modal">
                <div className="c-modal__container">{children}</div>
            </div>
        </Portal>
    );
};

export default Modal;
