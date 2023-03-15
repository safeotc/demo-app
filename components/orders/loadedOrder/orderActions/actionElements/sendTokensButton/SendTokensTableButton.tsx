import Order from '../../../../../../models/Order';
import { ButtonProps } from '../../../../../forms/buttons/Button';
import PrimaryButton from '../../../../../forms/buttons/PrimaryButton';
import Tooltip from '../../../../../forms/tooltip/Tooltip';
import FlatIcon from '../../../../../icons/FlatIcon';
import NoActionTableElement from '../NoActionTableElement';
import useSendTokensButton from './useSendTokensButton';

interface SendTokensTableButtonProps {
    order: Order;
}

const SendTokensTableButton = ({ order }: SendTokensTableButtonProps) => {
    const { showSuccessAlert, showTokensNeedToBeDistributedAlert, isSendButtonDisabled, isLoading, sendTokens } =
        useSendTokensButton(order);

    if (showSuccessAlert) {
        return <NoActionTableElement />;
    }

    const baseSendButtonProps: ButtonProps = {
        className: 'u-width-full',
        loading: isLoading,
        disabled: isSendButtonDisabled,
        icon: <FlatIcon icon="coins" />,
        onClick: sendTokens,
    };

    return showTokensNeedToBeDistributedAlert ? (
        <Tooltip id={`send-tokens-table-button-${order.id}`} content="Tokens are not available yet.">
            {({ showTooltip, hideTooltip, tooltipId }) => (
                <PrimaryButton
                    {...baseSendButtonProps}
                    onMouseEnter={showTooltip}
                    onMouseLeave={hideTooltip}
                    data-for={tooltipId}
                    data-tip
                >
                    Send
                </PrimaryButton>
            )}
        </Tooltip>
    ) : (
        <PrimaryButton {...baseSendButtonProps}>Send</PrimaryButton>
    );
};

export default SendTokensTableButton;
