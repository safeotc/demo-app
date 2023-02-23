import SuccessAlert from '../../../../alerts/types/SuccessAlert';

const CompletedAlert = () => {
    return (
        <SuccessAlert
            id="order-completed-alert"
            content="This order was executed successfully! Buyer and seller kept their ends of the deal."
        />
    );
};

export default CompletedAlert;
