import WarningAlert from '../../../../alerts/types/WarningAlert';

const DemoAlert = () => {
    return (
        <div className="u-margin-bottom">
            <WarningAlert
                id="demo-order-alert"
                content={
                    <>
                        Demo orders are meant only for presentational purposes, they cannot be interacted with.
                        <br />
                        Please create a new order to see additional functionalities.
                    </>
                }
            />
        </div>
    );
};

export default DemoAlert;
