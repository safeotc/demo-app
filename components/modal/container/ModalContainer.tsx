import React from 'react';
import { CSSTransition } from 'react-transition-group';
import FlatIcon from '../../icons/FlatIcon';
import { ModalProps } from '../Modal';
import useModalContainer from './useModalContainer';
import cn from 'classnames';

interface ModalContainerProps extends ModalProps {}

const ModalContainer: React.FC<ModalContainerProps> = ({
    children,
    isOpened,
    boxProps,
    size,
    skipSettingFocusables,
    onCloseRequest,
}) => {
    const { containerRef, focusRef, focusFirstFocusable, focusLastFocusable, renderChildren } = useModalContainer(
        isOpened,
        children,
        skipSettingFocusables
    );

    const containerBoxClasses = cn('c-modal-container__box', boxProps?.className || '', {
        'c-modal-container__box--s': size === 's',
        'c-modal-container__box--m': size === 'm',
        'c-modal-container__box--l': size === 'l',
        'c-modal-container__box--xl': size === 'xl',
    });

    return (
        <CSSTransition
            nodeRef={containerRef}
            in={isOpened}
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

                <div {...boxProps} className={containerBoxClasses} ref={focusRef}>
                    <button className="c-modal-container__close" onClick={onCloseRequest}>
                        <FlatIcon icon="cross" className="c-modal-container__close-icon" />
                    </button>

                    {renderChildren()}
                </div>

                <span tabIndex={0} onFocus={focusFirstFocusable} />
            </div>
        </CSSTransition>
    );
};

export default ModalContainer;
