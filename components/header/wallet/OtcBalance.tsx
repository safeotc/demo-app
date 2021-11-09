import React from 'react';

interface OtcBalanceProps {
    address: string;
    balance: string;
}

const OtcBalance: React.FC<OtcBalanceProps> = ({ address, balance }) => {
    const addressDisplay =
        address.length > 8 ? `${address.substr(0, 5)}...${address.substr(address.length - 3)}` : address;

    const copyAddressToClipBoardAndDisplayAlert = () => {
        if (!navigator) {
            alert('Copy to clipboard failed.');
            return;
        }

        navigator.clipboard.writeText(address);
        alert('Address was copied to clipboard.');
    };

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
