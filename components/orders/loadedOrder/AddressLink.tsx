import { useRef } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { getAdddressShortForm } from '../../../common/helpers/orders';
import Tooltip from '../../forms/tooltip/Tooltip';

interface AddressLinkProps {
    address: string | null;
    noAddressText: string;
}

const AddressLink = ({ address, noAddressText }: AddressLinkProps) => {
    const tooltipUuid = useRef(uuidV4());

    if (!address) {
        return <>{noAddressText}</>;
    }

    return (
        <Tooltip id={`address-link-${tooltipUuid.current}`} content={address}>
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
