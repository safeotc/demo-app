import InfoAlert from '../../../../alerts/types/InfoAlert';

const AlreadyAcceptedAlert = () => {
    return (
        <div className="u-margin-bottom">
            <InfoAlert
                id="order-already-accepted-alert"
                content="This order has already been accepted by someone else."
            />
        </div>
    );
};

export default AlreadyAcceptedAlert;
