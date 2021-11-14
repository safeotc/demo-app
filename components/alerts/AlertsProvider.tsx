import React from 'react';
import Alerts from './Alerts';
import useAlerts, { UseAlertsData } from './useAlerts';

type AlertsData = Omit<UseAlertsData, 'alerts'>;

const defaultAlertsContext = {
    addSuccessAlert: () => {},
    addDangerAlert: () => {},
};
export const AlertsContext = React.createContext<AlertsData>(defaultAlertsContext);

const AlertsProvider: React.FC = ({ children }) => {
    const { alerts, ...alertsContext } = useAlerts();

    return (
        <AlertsContext.Provider value={alertsContext}>
            {children}
            <Alerts items={alerts} />
        </AlertsContext.Provider>
    );
};

export default AlertsProvider;
