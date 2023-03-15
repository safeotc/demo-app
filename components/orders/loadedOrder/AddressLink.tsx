import { getAdddressShortForm } from '../../../common/helpers/orders';
import Tooltip from '../../forms/tooltip/Tooltip';

interface AddressLinkProps {
    address: string | null;
    noAddressText: string;
}

const AddressLink = ({ address, noAddressText }: AddressLinkProps) => {
    if (!address) {
        return <>{noAddressText}</>;
    }

    return (
        <Tooltip content={address}>
            {({ showTooltip, hideTooltip, tooltipId }) => (
                <a
                    href="#"
                    className="c-link"
                    onClick={(e) => e.preventDefault()}
                    onMouseEnter={showTooltip}
                    onMouseLeave={hideTooltip}
                    data-for={tooltipId}
                    data-tip
                >
                    {getAdddressShortForm(address)}
                </a>
            )}
        </Tooltip>
    );
};

export default AddressLink;
