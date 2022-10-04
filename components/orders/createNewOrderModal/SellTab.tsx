import Alert from '../../alerts/Alert';
import FlatIcon from '../../icons/FlatIcon';
import CreateNewOrderForm from './createNewOrderForm/CreateNewOrderForm';

const SellTab = () => {
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
            <CreateNewOrderForm type="sell" />
        </>
    );
};

export default SellTab;
