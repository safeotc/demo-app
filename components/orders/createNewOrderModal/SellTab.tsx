import CreateNewOrderForm, { OnProcessed } from './createNewOrderForm/CreateNewOrderForm';

interface SellTabProps {
    onProcessed: OnProcessed;
}

const SellTab = ({ onProcessed }: SellTabProps) => {
    return (
        <CreateNewOrderForm
            type="sell"
            onProcessed={onProcessed}
            valueDepositInfo="Security deposit for a sell order is 50% of total order value."
        />
    );
};

export default SellTab;
