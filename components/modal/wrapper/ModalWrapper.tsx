import React from 'react';
import { ModalProps } from '../Modal';
import useModalWrapper from './useModalWrapper';

interface ModalWrapperProps extends Pick<ModalProps, 'onCloseRequest'> {
    children: React.ReactNode;
}

const ModalWrapper = ({ children, onCloseRequest }: ModalWrapperProps) => {
    const { wrapperRef, storeActiveMouseElement, closeModalIfMouseDownMouseClickElementsMatch } =
        useModalWrapper(onCloseRequest);

    return (
        <div
            className="c-modal-wrapper"
            ref={wrapperRef}
            onMouseDown={storeActiveMouseElement}
            onClick={closeModalIfMouseDownMouseClickElementsMatch}
        >
            {children}
        </div>
    );
};

export default ModalWrapper;
