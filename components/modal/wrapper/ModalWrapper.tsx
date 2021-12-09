import React from 'react';
import { ModalProps } from '../Modal';
import { CSSTransition } from 'react-transition-group';
import useModalWrapper from './useModalWrapper';

interface ModalWrapperProps extends ModalProps {
    onEnter: () => void;
    onExited: () => void;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children, isOpened, onCloseRequest, onEnter, onExited }) => {
    const { wrapperRef, storeActiveMouseElement, closeModalIfMouseDownMouseClickElementsMatch } =
        useModalWrapper(onCloseRequest);

    return (
        <CSSTransition
            nodeRef={wrapperRef}
            in={isOpened}
            mountOnEnter={true}
            unmountOnExit={true}
            timeout={{ enter: 100, exit: 0 }}
            classNames={{
                enter: 'c-modal-wrapper--enter',
                enterActive: 'c-modal-wrapper--enter-active',
            }}
            onEnter={onEnter}
            onExited={onExited}
        >
            <div
                className="c-modal-wrapper"
                ref={wrapperRef}
                onMouseDown={storeActiveMouseElement}
                onClick={closeModalIfMouseDownMouseClickElementsMatch}
            >
                {children}
            </div>
        </CSSTransition>
    );
};

export default ModalWrapper;
