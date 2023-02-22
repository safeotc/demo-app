import InfoAlert from '../../../../alerts/types/InfoAlert';

const NotConnectedAlert = () => {
    return (
        <div className="u-margin-bottom">
            <InfoAlert
                id="order-actions-connect-wallet-alert"
                content="Please connect your wallet in order to execute actions."
            />
        </div>
    );
};

export default NotConnectedAlert;
