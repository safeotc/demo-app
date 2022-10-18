import SuccessIcon from '../../icons/alerts/SuccessIcon';
import Alert, { AlertProps } from '../Alert';

type SuccessAlertProps = Omit<AlertProps, 'type' | 'icon'>;

const SuccessAlert = (props: SuccessAlertProps) => {
    return <Alert {...props} type="success" icon={<SuccessIcon />} />;
};

export default SuccessAlert;
