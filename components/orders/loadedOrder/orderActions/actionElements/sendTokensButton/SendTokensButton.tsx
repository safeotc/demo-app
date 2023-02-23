import Order from '../../../../../../models/Order';
import InfoAlert from '../../../../../alerts/types/InfoAlert';
import SuccessAlert from '../../../../../alerts/types/SuccessAlert';
import PrimaryButton from '../../../../../forms/buttons/PrimaryButton';
import FlatIcon from '../../../../../icons/FlatIcon';
import useSendTokensButton from './useSendTokensButton';

interface SendTokensButtonProps {
    order: Order;
}

const SendTokensButton = ({ order }: SendTokensButtonProps) => {
    const {
        showSuccessAlert,
        showSendTokensButton,
        showTokensNeedToBeDistributedAlert,
        isSendButtonDisabled,
        isLoading,
        sendTokens,
    } = useSendTokensButton(order);

    return (
        <>
            {showTokensNeedToBeDistributedAlert && (
                <InfoAlert
                    id="distribute-tokens-alert"
                    className="u-margin-bottom"
                    content="Tokens are not available yet. You will be able to send them to the smart contract once you receive the tokens."
                />
            )}
            {showSuccessAlert && (
                <SuccessAlert
                    id="tokens-sent-alert"
                    content="You have successfully sent tokens and claimed money from the smart contract."
                />
            )}
            {showSendTokensButton && (
                <PrimaryButton
                    className="u-width-full"
                    loading={isLoading}
                    disabled={isSendButtonDisabled}
                    icon={<FlatIcon icon="coins" />}
                    onClick={sendTokens}
                >
                    Send tokens
                </PrimaryButton>
            )}
        </>
    );
};

export default SendTokensButton;
