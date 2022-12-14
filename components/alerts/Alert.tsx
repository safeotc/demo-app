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
    onClose?: AlertOnClose;
    icon?: JSX.Element;
    disposeTimeout?: number;
    hideCloseButton?: boolean;
    className?: string;
}

const Alert = ({ id, type, content, onClose, icon, disposeTimeout, hideCloseButton, className }: AlertProps) => {
    const { timeoutPercentDone, pauseDisposing, resumeDisposing, closeAlert } = useAlert(id, onClose, disposeTimeout);
    const alertClasses = cn(
        'c-alert',
        {
            'c-alert--success': type === 'success',
            'c-alert--warning': type === 'warning',
            'c-alert--danger': type === 'danger',
            'c-alert--info': type === 'info',
        },
        className
    );

    return (
        <div className={alertClasses} onMouseEnter={pauseDisposing} onMouseLeave={resumeDisposing}>
            {!!icon && <div className="c-alert__icon">{icon}</div>}
            <div className="c-alert__content">
                {!hideCloseButton && !!onClose && (
                    <button className="c-alert__close" onClick={closeAlert}>
                        <FlatIcon icon="cross" />
                    </button>
                )}
                {content}
            </div>
            {!!disposeTimeout && <div className="c-alert__progress-bar" style={{ width: `${timeoutPercentDone}%` }} />}
        </div>
    );
};

export default Alert;
