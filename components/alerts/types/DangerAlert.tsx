import FlatIcon from '../../icons/FlatIcon';
import Alert, { AlertProps } from '../Alert';

type DangerAlertProps = Omit<AlertProps, 'type' | 'icon'>;

const DangerAlert = (props: DangerAlertProps) => {
    return <Alert {...props} type="danger" icon={<FlatIcon icon="exclamation" />} />;
};

export default DangerAlert;
