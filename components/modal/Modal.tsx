import React from 'react';
import Portal from '../Portal';
import { MODALS_ELEMENT_ID } from '../../common/constants/dom';
import ModalContainer from './container/ModalContainer';
import ModalWrapper from './wrapper/ModalWrapper';
import useModal from './useModal';

type ModalSize = 's' | 'm' | 'l' | 'xl';
export type ModalChildren = React.ReactNode | ((updateFocusables: () => void) => React.ReactNode);

export interface ModalProps {
    isOpened: boolean;
    onCloseRequest: () => void;
    size: ModalSize;
    boxProps?: React.HTMLAttributes<HTMLDivElement>;
    children: ModalChildren;
    skipSettingFocusables?: boolean;
}

const Modal = ({ children, isOpened, size, boxProps, skipSettingFocusables, onCloseRequest }: ModalProps) => {
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
