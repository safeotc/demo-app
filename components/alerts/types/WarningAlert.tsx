import WarningIcon from '../../icons/alerts/WarningIcon';
import Alert, { AlertProps } from '../Alert';

type WarningAlertProps = Omit<AlertProps, 'type' | 'icon'>;

const WarningAlert = (props: WarningAlertProps) => {
    return <Alert {...props} type="warning" icon={<WarningIcon />} />;
};

export default WarningAlert;
