import React from 'react';

interface OtcBalanceProps {
    address: string;
    balance: string;
}

const OtcBalance: React.FC<OtcBalanceProps> = ({ address, balance }) => {
    const addressDisplay =
        address.length > 8 ? `${address.substr(0, 5)}...${address.substr(address.length - 3)}` : address;

    return (
        <div className="c-balance">
            <span className="c-balance__otc-balance u-margin-right">{balance} OTC</span>
            <button className="c-balance__address">{addressDisplay}</button>
        </div>
    );
};

export default OtcBalance;
