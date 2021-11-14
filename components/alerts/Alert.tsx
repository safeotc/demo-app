import React from 'react';
import cn from 'classnames';
import FlatIcon from '../icons/FlatIcon';
import useAlert from './useAlert';

export type AlertType = 'success' | 'warning' | 'info' | 'danger';
export type AlertContent = JSX.Element | string;
export type AlertOnClose = (alertId: string) => void;

export interface AlertProps {
    id: string;
    type: AlertType;
    content: AlertContent;
    onClose: AlertOnClose;
    icon?: JSX.Element;
    disposeTimeout?: number;
    hideCloseButton?: boolean;
}

const Alert: React.FC<AlertProps> = ({ id, type, content, onClose, icon, disposeTimeout, hideCloseButton }) => {
    const { closeAlert } = useAlert(id, onClose, disposeTimeout);

    const alertClasses = cn('c-alert', `c-alert--${type}`);

    return (
        <div className={alertClasses}>
            {!!icon && <div className="c-alert__icon">{icon}</div>}
            <div className="c-alert__content">
                {!hideCloseButton && (
                    <button className="c-alert__close" onClick={closeAlert}>
                        <FlatIcon icon="cross" />
                    </button>
                )}
                {content}
            </div>
        </div>
    );
};

export default Alert;
