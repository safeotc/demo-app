import React from 'react';
import { CSSTransition } from 'react-transition-group';
import FlatIcon from '../../icons/FlatIcon';
import { ModalProps } from '../Modal';
import useModalContainer from './useModalContainer';

interface ModalContainerProps extends ModalProps {}

const ModalContainer: React.FC<ModalContainerProps> = ({ children, isOpened, onCloseRequest }) => {
    const { containerRef, focusRef, focusFirstFocusable, focusLastFocusable } = useModalContainer(isOpened);

    return (
        <CSSTransition
            nodeRef={containerRef}
            in={isOpened}
            tabIndex={0}
            mountOnEnter={true}
            unmountOnExit={true}
            timeout={{ enter: 300, exit: 0 }}
            classNames={{
                enter: 'c-modal-container--enter',
                enterActive: 'c-modal-container--enter-active',
            }}
        >
            <div className="c-modal-container" ref={containerRef}>
                <span tabIndex={0} onFocus={focusLastFocusable} />

                <div ref={focusRef}>
                    <button className="c-modal-container__close" onClick={onCloseRequest}>
                        <FlatIcon icon="cross" className="c-modal-container__close-icon" />
                    </button>

                    {children}
                </div>

                <span tabIndex={0} onFocus={focusFirstFocusable} />
            </div>
        </CSSTransition>
    );
};

export default ModalContainer;
