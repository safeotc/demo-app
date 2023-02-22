import DangerButton from '../../../../forms/buttons/DangerButton';
import FlatIcon from '../../../../icons/FlatIcon';

const CancelOrderButton = () => {
    return (
        <DangerButton className="u-width-full" icon={<FlatIcon icon="trash" />}>
            Cancel order
        </DangerButton>
    );
};

export default CancelOrderButton;
