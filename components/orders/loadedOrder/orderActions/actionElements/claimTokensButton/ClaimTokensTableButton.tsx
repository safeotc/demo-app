import Order from '../../../../../../models/Order';
import PrimaryButton from '../../../../../forms/buttons/PrimaryButton';
import FlatIcon from '../../../../../icons/FlatIcon';
import useClaimTokensButton from './useClaimTokensButton';
import Tooltip from '../../../../../forms/tooltip/Tooltip';
import { ButtonProps } from '../../../../../forms/buttons/Button';
import NoActionTableElement from '../NoActionTableElement';

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

    const baseClaimButtonProps: ButtonProps = {
        className: 'u-full-width',
        disabled: isClaimButtonDisabled,
        icon: <FlatIcon icon="coins" />,
        loading: isLoading,
        onClick: claimTokens,
    };

    return wrapWithTooltip ? (
        <Tooltip id={`claim-tokens-table-button-${order.id}`} content={tooltipText}>
            {({ showTooltip, hideTooltip, tooltipId }) => (
                <PrimaryButton
                    {...baseClaimButtonProps}
                    onMouseEnter={showTooltip}
                    onMouseLeave={hideTooltip}
                    data-for={tooltipId}
                    data-tip
                >
                    Claim tokens
                </PrimaryButton>
            )}
        </Tooltip>
    ) : (
        <PrimaryButton {...baseClaimButtonProps}>Claim tokens</PrimaryButton>
    );
};

export default ClaimTokensTableButton;
