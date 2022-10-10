import CreateNewOrderForm, { OnProcessed } from './createNewOrderForm/CreateNewOrderForm';

interface BuyTabProps {
    onProcessed: OnProcessed;
}

const BuyTab = ({ onProcessed }: BuyTabProps) => {
    return <CreateNewOrderForm type="buy" onProcessed={onProcessed} />;
};

export default BuyTab;
