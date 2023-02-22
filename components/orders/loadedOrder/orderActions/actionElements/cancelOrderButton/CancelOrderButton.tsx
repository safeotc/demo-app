import DangerButton from '../../../../../forms/buttons/DangerButton';
import FlatIcon from '../../../../../icons/FlatIcon';
import useCancelOrderButton from './useCancelOrderButton';

interface CancelOrderButtonProps {
    orderId: string;
}

const CancelOrderButton = ({ orderId }: CancelOrderButtonProps) => {
    const { isLoading, cancelOrder } = useCancelOrderButton(orderId);

    return (
        <DangerButton
            className="u-width-full"
            icon={<FlatIcon icon="trash" />}
            disabled={isLoading}
            loading={isLoading}
            onClick={cancelOrder}
        >
            Cancel order
        </DangerButton>
    );
};

export default CancelOrderButton;
