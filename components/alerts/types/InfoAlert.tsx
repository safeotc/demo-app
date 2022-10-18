import InfoIcon from '../../icons/alerts/InfoIcon';
import Alert, { AlertProps } from '../Alert';

type InfoAlertProps = Omit<AlertProps, 'type' | 'icon'>;

const InfoAlert = (props: InfoAlertProps) => {
    return <Alert {...props} type="info" icon={<InfoIcon />} />;
};

export default InfoAlert;
