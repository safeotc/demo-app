import FlatIcon from '../../icons/FlatIcon';
import Alert, { AlertProps } from '../Alert';

type WarningAlertProps = Omit<AlertProps, 'type' | 'icon'>;

const WarningAlert = (props: WarningAlertProps) => {
    return <Alert {...props} type="warning" icon={<FlatIcon icon="shield-exclamation" />} />;
};

export default WarningAlert;
