import CancelOrderButton from './CancelOrderButton';

interface CancelOrderTableButtonProps {
    orderId: string;
}

const CancelOrderTableButton = ({ orderId }: CancelOrderTableButtonProps) => {
    return <CancelOrderButton orderId={orderId} />;
};

export default CancelOrderTableButton;
