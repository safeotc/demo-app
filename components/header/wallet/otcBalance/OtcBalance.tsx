import useOtcBalance from './useOtcBalance';

interface OtcBalanceProps {
    address: string;
    balance: string;
}

const OtcBalance = ({ address, balance }: OtcBalanceProps) => {
    const { addressDisplay, copyAddressToClipBoardAndDisplayAlert } = useOtcBalance(address);

    return (
        <div className="c-balance u-margin-left-small">
            <div className="c-balance__content">
                <span className="c-balance__otc-balance">{balance} OTC</span>
                <span className="c-balance__divider">|</span>
                <button className="c-balance__address" onClick={copyAddressToClipBoardAndDisplayAlert}>
                    {addressDisplay}
                </button>
            </div>
        </div>
    );
};

export default OtcBalance;
