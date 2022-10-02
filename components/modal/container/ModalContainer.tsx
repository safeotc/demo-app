import FlatIcon from '../../icons/FlatIcon';
import { ModalProps } from '../Modal';
import useModalContainer from './useModalContainer';
import cn from 'classnames';

interface ModalContainerProps extends Omit<ModalProps, 'isOpened'> {}

const ModalContainer = ({ children, boxProps, size, skipSettingFocusables, onCloseRequest }: ModalContainerProps) => {
    const { focusRef, focusFirstFocusable, focusLastFocusable, renderChildren } = useModalContainer(
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
        <div className="c-modal-container">
            <span tabIndex={0} onFocus={focusLastFocusable} />

            <div {...boxProps} className={containerBoxClasses} ref={focusRef}>
                <button className="c-modal-container__close" onClick={onCloseRequest}>
                    <FlatIcon icon="cross" className="c-modal-container__close-icon" />
                </button>

                {renderChildren()}
            </div>

            <span tabIndex={0} onFocus={focusFirstFocusable} />
        </div>
    );
};

export default ModalContainer;
