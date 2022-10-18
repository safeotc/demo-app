import FlatIcon from '../../icons/FlatIcon';
import Alert, { AlertProps } from '../Alert';

type SuccessAlertProps = Omit<AlertProps, 'type' | 'icon'>;

const SuccessAlert = (props: SuccessAlertProps) => {
    return <Alert {...props} type="success" icon={<FlatIcon icon="checkbox" />} />;
};

export default SuccessAlert;
