import { useState } from 'react';
import Button from '../../../forms/buttons/Button';
import Popover from '../../../popover/Popover';
import useOtcBalance from './useOtcBalance';

interface OtcBalanceProps {
    address: string;
    balance: string;
    disconnect: () => void;
}

const OtcBalance = ({ address, balance, disconnect }: OtcBalanceProps) => {
    const { addressDisplay, copyAddressToClipBoardAndDisplayAlert } = useOtcBalance(address);

    const [isDashboardPopoverOpened, setIsDashboardPopoverOpened] = useState(false);
    const openDashboardPopover = () => setIsDashboardPopoverOpened(true);
    const closeDashboardPopover = () => setIsDashboardPopoverOpened(false);

    const popover = (
        <div>
            <Button onClick={disconnect}>Disconnect wallet</Button>
        </div>
    );

    return (
        <Popover
            isOpened={isDashboardPopoverOpened}
            popover={popover}
            onCloseRequest={closeDashboardPopover}
            position="bottomRight"
            positionOn={[
                ['base', 'topRight'],
                ['s', 'topRight'],
            ]}
        >
            <div className="c-balance u-margin-left-small" onClick={openDashboardPopover}>
                <div className="c-balance__content">
                    <span className="c-balance__otc-balance">{balance} OTC</span>
                    <span className="c-balance__divider">|</span>
                    <button className="c-balance__address" onClick={copyAddressToClipBoardAndDisplayAlert}>
                        {addressDisplay}
                    </button>
                </div>
            </div>
        </Popover>
    );
};

export default OtcBalance;
