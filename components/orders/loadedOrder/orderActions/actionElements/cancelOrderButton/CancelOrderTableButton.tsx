import DangerButton from '../../../../../forms/buttons/DangerButton';
import FlatIcon from '../../../../../icons/FlatIcon';
import useCancelOrderButton from './useCancelOrderButton';

interface CancelOrderTableButtonProps {
    orderId: string;
}

const CancelOrderTableButton = ({ orderId }: CancelOrderTableButtonProps) => {
    const { isLoading, cancelOrder } = useCancelOrderButton(orderId);

    return (
        <DangerButton
            className="u-width-full"
            icon={<FlatIcon icon="trash" />}
            disabled={isLoading}
            loading={isLoading}
            onClick={cancelOrder}
        >
            Cancel
        </DangerButton>
    );
};

export default CancelOrderTableButton;
