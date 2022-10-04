import Alert from '../../alerts/Alert';
import FlatIcon from '../../icons/FlatIcon';
import CreateNewOrderForm, { OnProcessed } from './createNewOrderForm/CreateNewOrderForm';

interface SellTabProps {
    onProcessed: OnProcessed;
}

const SellTab = ({ onProcessed }: SellTabProps) => {
    return (
        <>
            <div className="u-margin-bottom">
                <Alert
                    type="info"
                    icon={<FlatIcon icon="info" />}
                    hideCloseButton={true}
                    content="This is an example sell form. Lorem ipsum..."
                    id="info-alert"
                />
            </div>
            <CreateNewOrderForm type="sell" onProcessed={onProcessed} />
        </>
    );
};

export default SellTab;
