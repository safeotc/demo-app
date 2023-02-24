import Button from '../../../forms/buttons/Button';
import ButtonText from '../../../forms/buttons/ButtonText';
import SecondaryButton from '../../../forms/buttons/SecondaryButton';
import DropdownDownArrowIcon from '../../../icons/DropdownDownArrowIcon';
import FlatIcon from '../../../icons/FlatIcon';
import Popover from '../../../popover/Popover';
import useOtcBalance from './useOtcBalance';

interface OtcBalanceProps {
    address: string;
    balance: string;
    disconnect: () => void;
}

const OtcBalance = ({ address, balance, disconnect }: OtcBalanceProps) => {
    const {
        addressDisplay,
        copyAddressToClipBoardAndDisplayAlert,
        isDashboardPopoverOpened,
        openDashboardPopover,
        closeDashboardPopover,
    } = useOtcBalance(address);

    const popover = (
        <div className="c-wallet-actions">
            <div className="c-wallet-actions__balance">
                <p className="c-wallet-actions__section-title">Balance</p>
                <span>{balance} OTC</span>
            </div>
            <div className="c-wallet-actions__buttons">
                <p className="c-wallet-actions__section-title">Actions</p>
                <div className="u-margin-bottom-tiny">
                    <Button
                        className="u-text-white-space-nowrap u-width-full"
                        onClick={copyAddressToClipBoardAndDisplayAlert}
                        icon={<FlatIcon icon="copy" />}
                    >
                        Copy address
                    </Button>
                </div>
                <div>
                    <Button
                        className="u-text-white-space-nowrap u-width-full"
                        onClick={disconnect}
                        icon={<FlatIcon icon="link-slash" />}
                    >
                        Disconnect wallet
                    </Button>
                </div>
            </div>
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
            <div className="u-margin-left-small">
                <SecondaryButton onClick={openDashboardPopover} altBackground={true}>
                    <ButtonText>{addressDisplay}</ButtonText>
                    <DropdownDownArrowIcon />
                </SecondaryButton>
            </div>
        </Popover>
    );
};

export default OtcBalance;
