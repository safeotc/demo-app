import Order from '../../../../../../models/Order';
import PrimaryButton from '../../../../../forms/buttons/PrimaryButton';
import FlatIcon from '../../../../../icons/FlatIcon';
import useAcceptOrderButton from './useAcceptOrderButton';

interface AcceptOrderTableButtonProps {
    order: Order;
    forceDisabled?: boolean;
}

const AcceptOrderTableButton = ({ order, forceDisabled }: AcceptOrderTableButtonProps) => {
    const { isLoading, additionalButtonText, buttonFlatIcon, acceptOrder } = useAcceptOrderButton(order);

    return (
        <PrimaryButton
            disabled={isLoading || !!forceDisabled}
            loading={isLoading}
            className="u-width-full"
            icon={<FlatIcon icon={buttonFlatIcon} />}
            onClick={acceptOrder}
        >
            {additionalButtonText}
        </PrimaryButton>
    );
};

export default AcceptOrderTableButton;
