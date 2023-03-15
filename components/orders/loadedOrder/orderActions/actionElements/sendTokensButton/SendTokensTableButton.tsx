import Order from '../../../../../../models/Order';
import PrimaryButton from '../../../../../forms/buttons/PrimaryButton';
import FlatIcon from '../../../../../icons/FlatIcon';
import DisabledButtonTooltip from '../DisabledButtonTooltip';
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

    const sendButton = (
        <PrimaryButton
            className="u-width-full"
            loading={isLoading}
            disabled={isSendButtonDisabled}
            icon={<FlatIcon icon="coins" />}
            onClick={sendTokens}
        >
            Send
        </PrimaryButton>
    );

    return showTokensNeedToBeDistributedAlert ? (
        <DisabledButtonTooltip tooltipText="Tokens are not available yet.">{sendButton}</DisabledButtonTooltip>
    ) : (
        sendButton
    );
};

export default SendTokensTableButton;
