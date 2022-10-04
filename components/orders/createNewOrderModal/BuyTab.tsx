import Alert from '../../alerts/Alert';
import FlatIcon from '../../icons/FlatIcon';
import CreateNewOrderForm, { OnProcessed } from './createNewOrderForm/CreateNewOrderForm';

interface BuyTabProps {
    onProcessed: OnProcessed;
}

const BuyTab = ({ onProcessed }: BuyTabProps) => {
    return (
        <>
            <div className="u-margin-bottom">
                <Alert
                    type="info"
                    icon={<FlatIcon icon="info" />}
                    hideCloseButton={true}
                    content="This is an example buy form. Lorem ipsum..."
                    id="info-alert"
                />
            </div>

            <CreateNewOrderForm type="buy" onProcessed={onProcessed} />
        </>
    );
};

export default BuyTab;
