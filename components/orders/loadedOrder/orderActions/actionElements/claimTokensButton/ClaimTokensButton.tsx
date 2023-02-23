import Order from '../../../../../../models/Order';
import InfoAlert from '../../../../../alerts/types/InfoAlert';
import PrimaryButton from '../../../../../forms/buttons/PrimaryButton';
import FlatIcon from '../../../../../icons/FlatIcon';
import useClaimTokensButton from './useClaimTokensButton';

interface ClaimTokensButtonProps {
    order: Order;
}

const ClaimTokensButton = ({ order }: ClaimTokensButtonProps) => {
    const {
        showClaimTokensButton,
        showTokensNeedToBeDistributedAlert,
        showTokensNeedToBeSentAlert,
        isClaimButtonDisabled,
        isLoading,
        claimTokens,
    } = useClaimTokensButton(order);

    return (
        <>
            {showTokensNeedToBeDistributedAlert && (
                <InfoAlert
                    id="distribute-tokens-alert"
                    className="u-margin-bottom"
                    content="Tokens are not available yet. Once they are, the seller needs to send them to the smart contract for you to claim them."
                />
            )}
            {showTokensNeedToBeSentAlert && (
                <InfoAlert
                    id="claim-tokens-alert"
                    className="u-margin-bottom"
                    content="Tokens claim will be enabled once the seller send tokens to the smart contract."
                />
            )}
            {showClaimTokensButton && (
                <PrimaryButton
                    className="u-width-full"
                    disabled={isClaimButtonDisabled}
                    icon={<FlatIcon icon="coins" />}
                    loading={isLoading}
                    onClick={claimTokens}
                >
                    Claim tokens
                </PrimaryButton>
            )}
        </>
    );
};

export default ClaimTokensButton;
