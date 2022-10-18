import { useCallback, useState } from 'react';
import { AlertContent, AlertProps, AlertType } from './Alert';
import { v4 as uuidV4 } from 'uuid';
import SuccessIcon from '../icons/alerts/SuccessIcon';
import DangerIcon from '../icons/alerts/DangerIcon';

type AddAlert = (content: AlertContent, disposeTimeout?: number, hideCloseButton?: boolean) => void;

export interface UseAlertsData {
    alerts: AlertProps[];
    addSuccessAlert: AddAlert;
    addDangerAlert: AddAlert;
}

const useAlerts = (): UseAlertsData => {
    const [alerts, setAlerts] = useState<AlertProps[]>([]);

    const removeAlert = useCallback(
        (alertId: string) => {
            setAlerts((alerts) => alerts.filter((alert) => alert.id !== alertId));
        },
        [setAlerts]
    );

    const addAlert = useCallback(
        (
            type: AlertType,
            content: AlertContent,
            icon?: JSX.Element,
            disposeTimeout: number = 5000,
            hideCloseButton: boolean = false
        ) =>
            setAlerts((alerts) => [
                ...alerts,
                {
                    id: uuidV4(),
                    type,
                    content,
                    icon,
                    disposeTimeout,
                    onClose: removeAlert,
                    hideCloseButton,
                },
            ]),
        [setAlerts, removeAlert]
    );

    const addSuccessAlert = useCallback<AddAlert>(
        (content, disposeTimeout, hideCloseButton) =>
            addAlert('success', content, <SuccessIcon />, disposeTimeout, hideCloseButton),
        [addAlert]
    );

    const addDangerAlert = useCallback<AddAlert>(
        (content, disposeTimeout, hideClosebutton) =>
            addAlert('danger', content, <DangerIcon />, disposeTimeout, hideClosebutton),
        [addAlert]
    );

    return {
        alerts,
        addSuccessAlert,
        addDangerAlert,
    };
};

export default useAlerts;
