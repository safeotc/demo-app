import React from 'react';
import Portal from '../Portal';
import { MODALS_ELEMENT_ID } from '../../common/constants/dom';
import ModalContainer from './container/ModalContainer';
import ModalWrapper from './wrapper/ModalWrapper';

type ModalSize = 's' | 'm' | 'l' | 'xl';
export type ModalChildren = React.ReactNode | ((updateFocusables: () => void) => React.ReactNode);

export interface ModalProps {
    isOpened: boolean;
    onCloseRequest?: () => void;
    size: ModalSize;
    boxProps?: React.HTMLAttributes<HTMLDivElement>;
    children: ModalChildren;
    skipSettingFocusables?: boolean;
}

const Modal = ({ children, isOpened, size, boxProps, skipSettingFocusables, onCloseRequest }: ModalProps) => {
    if (!isOpened) {
        return null;
    }

    return (
        <Portal elementId={MODALS_ELEMENT_ID}>
            <ModalWrapper onCloseRequest={onCloseRequest}>
                <ModalContainer
                    onCloseRequest={onCloseRequest}
                    size={size}
                    boxProps={boxProps}
                    skipSettingFocusables={skipSettingFocusables}
                >
                    {children}
                </ModalContainer>
            </ModalWrapper>
        </Portal>
    );
};

export default Modal;
