import InfoAlert from '../../../../../alerts/types/InfoAlert';
import PrimaryButton from '../../../../../forms/buttons/PrimaryButton';
import FlatIcon from '../../../../../icons/FlatIcon';
import useSendTokensButton from './useSendTokensButton';

const SendTokensButton = () => {
    const { showTokensNeedToBeDistributedAlert, isSendButtonDisabled } = useSendTokensButton();

    return (
        <>
            {showTokensNeedToBeDistributedAlert && (
                <InfoAlert
                    id="distribute-tokens-alert"
                    className="u-margin-bottom"
                    content="Tokens are not available yet. You will be able to send them to the smart contract once you receive the tokens."
                />
            )}
            <PrimaryButton className="u-width-full" disabled={isSendButtonDisabled} icon={<FlatIcon icon="coins" />}>
                Send tokens
            </PrimaryButton>
        </>
    );
};

export default SendTokensButton;
