import React from 'react';
import useOtcBalance from './useOtcBalance';

interface OtcBalanceProps {
    address: string;
    balance: string;
}

const OtcBalance: React.FC<OtcBalanceProps> = ({ address, balance }) => {
    const { addressDisplay, copyAddressToClipBoardAndDisplayAlert } = useOtcBalance(address);

    return (
        <div className="c-balance u-margin-left-small">
            <span className="c-balance__otc-balance u-margin-right">{balance} OTC</span>
            <button className="c-balance__address" onClick={copyAddressToClipBoardAndDisplayAlert}>
                {addressDisplay}
            </button>
        </div>
    );
};

export default OtcBalance;
