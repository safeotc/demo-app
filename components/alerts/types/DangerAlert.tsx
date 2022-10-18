import DangerIcon from '../../icons/alerts/DangerIcon';
import Alert, { AlertProps } from '../Alert';

type DangerAlertProps = Omit<AlertProps, 'type' | 'icon'>;

const DangerAlert = (props: DangerAlertProps) => {
    return <Alert {...props} type="danger" icon={<DangerIcon />} />;
};

export default DangerAlert;
