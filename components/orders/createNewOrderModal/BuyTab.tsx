import CreateNewOrderForm, { OnProcessed } from './createNewOrderForm/CreateNewOrderForm';

interface BuyTabProps {
    onProcessed: OnProcessed;
}

const BuyTab = ({ onProcessed }: BuyTabProps) => {
    return (
        <CreateNewOrderForm
            type="buy"
            onProcessed={onProcessed}
            securityDepositInfo="Security deposit for a buy order is 100% of total value."
        />
    );
};

export default BuyTab;
