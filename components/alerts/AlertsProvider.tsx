import React from 'react';
import { ALERTS_ELEMENT_ID } from '../../common/constants/dom';
import Portal from '../Portal';
import Alerts from './Alerts';
import useAlerts, { UseAlertsData } from './useAlerts';

interface AlertsProviderProps {
    children: React.ReactNode;
}

type AlertsData = Omit<UseAlertsData, 'alerts'>;

const defaultAlertsContext = {
    addSuccessAlert: () => {},
    addInfoAlert: () => {},
    addDangerAlert: () => {},
    addWarningAlert: () => {},
};
export const AlertsContext = React.createContext<AlertsData>(defaultAlertsContext);

const AlertsProvider = ({ children }: AlertsProviderProps) => {
    const { alerts, ...alertsContext } = useAlerts();

    return (
        <AlertsContext.Provider value={alertsContext}>
            {children}
            <Portal elementId={ALERTS_ELEMENT_ID}>
                <Alerts items={alerts} />
            </Portal>
        </AlertsContext.Provider>
    );
};

export default AlertsProvider;
