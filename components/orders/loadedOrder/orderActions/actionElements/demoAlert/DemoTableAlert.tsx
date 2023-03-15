import Order from '../../../../../../models/Order';
import AcceptOrderTableButton from '../acceptOrderButton/AcceptOrderTableButton';
import DisabledButtonTooltip from '../DisabledButtonTooltip';

interface DemoTableAlertProps {
    order: Order;
}

const DemoTableAlert = ({ order }: DemoTableAlertProps) => {
    return (
        <DisabledButtonTooltip tooltipText="Demo orders cannot be interacted with.">
            <AcceptOrderTableButton order={order} forceDisabled={true} />
        </DisabledButtonTooltip>
    );
};

export default DemoTableAlert;
