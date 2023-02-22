import Order from '../../../../../../models/Order';
import PrimaryButton from '../../../../../forms/buttons/PrimaryButton';
import FlatIcon from '../../../../../icons/FlatIcon';
import useAcceptOrderButton from './useAcceptOrderButton';

interface AcceptOrderButtonProps {
    order: Order;
}

const AcceptOrderButton = ({ order }: AcceptOrderButtonProps) => {
    const { isLoading, additionalButtonText, acceptOrder } = useAcceptOrderButton(order);

    return (
        <PrimaryButton
            disabled={isLoading}
            loading={isLoading}
            className="u-width-full"
            icon={<FlatIcon icon="check" />}
            onClick={acceptOrder}
        >
            Accept order & {additionalButtonText}
        </PrimaryButton>
    );
};

export default AcceptOrderButton;
