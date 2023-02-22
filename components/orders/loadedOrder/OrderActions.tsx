import PrimaryButton from '../../forms/buttons/PrimaryButton';
import SecondaryButton from '../../forms/buttons/SecondaryButton';

const OrderActions = () => {
    return (
        <div>
            <div className="u-margin-bottom-small">
                <PrimaryButton className="u-width-full">Accept order</PrimaryButton>
            </div>
            <div>
                <SecondaryButton className="u-width-full">Go back</SecondaryButton>
            </div>
        </div>
    );
};

export default OrderActions;
