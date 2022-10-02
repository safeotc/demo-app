import Alert from '../../../alerts/Alert';
import FlatIcon from '../../../icons/FlatIcon';
import CreateOrderForm from './CreateOrderForm';

const BuyTab = () => {
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

            <CreateOrderForm type="buy" />
        </>
    );
};

export default BuyTab;
