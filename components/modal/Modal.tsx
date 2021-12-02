import React from 'react';
import { MODAL_ELEMENT_ID } from '../../common/constants/dom';
import Portal from '../Portal';

const Modal: React.FC = () => {
    return (
        <Portal elementId={MODAL_ELEMENT_ID}>
            <div className="c-modal">
                <div className="c-modal__backdrop">test</div>
                <div className="c-modal__container">test</div>
            </div>
        </Portal>
    );
};

export default Modal;
