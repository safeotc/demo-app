import Order from '../../../../../../models/Order';
import PrimaryButton from '../../../../../forms/buttons/PrimaryButton';
import FlatIcon from '../../../../../icons/FlatIcon';
import useClaimTokensButton from './useClaimTokensButton';
import NoActionTableElement from '../NoActionTableElement';
import DisabledButtonTooltip from '../DisabledButtonTooltip';

interface ClaimTokensTableButtonProps {
    order: Order;
}

const ClaimTokensTableButton = ({ order }: ClaimTokensTableButtonProps) => {
    const {
        showClaimTokensButton,
        showTokensNeedToBeDistributedAlert,
        showTokensNeedToBeSentAlert,
        isClaimButtonDisabled,
        isLoading,
        claimTokens,
    } = useClaimTokensButton(order);

    if (!showClaimTokensButton) {
        return <NoActionTableElement />;
    }

    const tooltipText = showTokensNeedToBeDistributedAlert
        ? 'Tokens are not available yet.'
        : showTokensNeedToBeSentAlert
        ? 'Waiting for seller to send tokens.'
        : null;
    const wrapWithTooltip = !!tooltipText;

    const claimButton = (
        <PrimaryButton
            className="u-full-width"
            disabled={isClaimButtonDisabled}
            icon={<FlatIcon icon="coins" />}
            loading={isLoading}
            onClick={claimTokens}
        >
            Claim
        </PrimaryButton>
    );

    return wrapWithTooltip ? (
        <DisabledButtonTooltip tooltipText={tooltipText}>{claimButton}</DisabledButtonTooltip>
    ) : (
        claimButton
    );
};

export default ClaimTokensTableButton;
