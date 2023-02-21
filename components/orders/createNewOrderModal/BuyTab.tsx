import CreateNewOrderForm, { OnProcessed } from './createNewOrderForm/CreateNewOrderForm';

interface BuyTabProps {
    onProcessed: OnProcessed;
}

const BuyTab = ({ onProcessed }: BuyTabProps) => {
    return (
        <CreateNewOrderForm
            type="buy"
            onProcessed={onProcessed}
            valueDepositInfo="Buyer is required to deposit 100% of total order value."
        />
    );
};

export default BuyTab;
