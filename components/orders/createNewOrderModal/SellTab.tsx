import CreateNewOrderForm, { OnProcessed } from './createNewOrderForm/CreateNewOrderForm';

interface SellTabProps {
    onProcessed: OnProcessed;
}

const SellTab = ({ onProcessed }: SellTabProps) => {
    return <CreateNewOrderForm type="sell" onProcessed={onProcessed} />;
};

export default SellTab;
