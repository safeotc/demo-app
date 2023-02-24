import { preventDefaultOnEnterOrSpace } from '../../../common/helpers/keyboard';
import ButtonText from '../../forms/buttons/ButtonText';
import PrimaryButton from '../../forms/buttons/PrimaryButton';
import DropdownDownArrowIcon from '../../icons/DropdownDownArrowIcon';
import WalletIcon from '../../icons/WalletIcon';
import Popover from '../../popover/Popover';
import { Wallet } from '../../wallet/useWallet';
import useConnectButton from './useConnectButton';

interface ConnectButtonProps {
    connect: (wallet: Wallet) => void;
}

const ConnectButton = ({ connect }: ConnectButtonProps) => {
    const { isPopoverOpened, openPopover, closePopover, walletListItems, connectSelectedWalletOnEnterOrSpace } =
        useConnectButton(connect);

    const popover = (
        <ul className="c-wallet-list">
            {walletListItems.map((wLI) => (
                <li
                    className="c-wallet-list__item"
                    key={wLI.address}
                    tabIndex={0}
                    onClick={wLI.onClick}
                    onKeyDown={preventDefaultOnEnterOrSpace}
                    onKeyUp={(e) => connectSelectedWalletOnEnterOrSpace(e, wLI.address)}
                >
                    {wLI.label}
                </li>
            ))}
        </ul>
    );

    return (
        <Popover
            isOpened={isPopoverOpened}
            popover={popover}
            onCloseRequest={closePopover}
            position="bottomRight"
            positionOn={[
                ['base', 'topRight'],
                ['s', 'topRight'],
            ]}
        >
            <PrimaryButton
                inlineOnMobile={true}
                icon={<WalletIcon />}
                addChildrenWithoutWrapping={true}
                onClick={openPopover}
            >
                <ButtonText>Connect</ButtonText>
                <DropdownDownArrowIcon />
            </PrimaryButton>
        </Popover>
    );
};

export default ConnectButton;
