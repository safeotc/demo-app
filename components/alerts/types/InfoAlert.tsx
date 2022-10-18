import FlatIcon from '../../icons/FlatIcon';
import Alert, { AlertProps } from '../Alert';

type InfoAlertProps = Omit<AlertProps, 'type' | 'icon'>;

const InfoAlert = (props: InfoAlertProps) => {
    return <Alert {...props} type="info" icon={<FlatIcon icon="info" />} />;
};

export default InfoAlert;
