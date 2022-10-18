import { useContext } from 'react';
import Alert from '../../alerts/Alert';
import { DemoContext } from '../../demo/DemoProvider';
import { DEMO_WALLETS } from '../../demo/useDemo';
import SecondaryButton from '../../forms/buttons/SecondaryButton';
import Radios, { NullableRadioValue, RadioOption } from '../../forms/radios/Radios';
import FlatIcon from '../../icons/FlatIcon';
import Modal from '../../modal/Modal';
import ModalTitle from '../../modal/ModalTitle';
import { WalletContext } from '../../wallet/WalletProvider';
import useDemoSettings from './useDemoSettings';

const DemoSettings = () => {
    const demoWallets = DEMO_WALLETS.map<RadioOption>((dM) => ({ label: dM.address, value: dM.address }));
    const { isOpened, showModal, hideModal } = useDemoSettings();
    const { wallet, changeWallet } = useContext(DemoContext);
    const changeDemoWallet = (walletAddress: NullableRadioValue) => !!walletAddress && changeWallet(walletAddress);
    const { isConnected } = useContext(WalletContext);

    return (
        <>
            <div className="u-text-center">
                <SecondaryButton
                    inlineOnMobile={true}
                    size="s"
                    iconOnlyOn={['base', 's', 'm']}
                    icon={<FlatIcon icon="settings-sliders" />}
                    onClick={showModal}
                >
                    Demo settings
                </SecondaryButton>
            </div>

            <Modal size="m" isOpened={isOpened} onCloseRequest={hideModal}>
                <ModalTitle>Demo application settings</ModalTitle>

                <h6 className="u-margin-bottom-tiny c-modal-container__sub-title">Wallet to connect with</h6>
                <p className="u-margin-bottom">
                    Select the wallet you want to connect to the application. The selected wallet will be used for
                    making/matching orders.
                </p>

                <div className="u-margin-bottom-large">
                    <Radios
                        name="wallet-selection"
                        options={demoWallets}
                        value={wallet.address}
                        onChange={changeDemoWallet}
                        disabled={isConnected}
                    />

                    {isConnected && (
                        <Alert
                            className="u-margin-top"
                            id="wallet-connected-alert"
                            type="warning"
                            icon={<FlatIcon icon="shield-exclamation" />}
                            content="Please disconnect the wallet you are currently using in order to switch to another wallet."
                        />
                    )}
                </div>

                <h6 className="u-margin-bottom-tiny c-modal-container__sub-title">Voting simulation</h6>
                <p className="u-margin-bottom-large">-- todo: make voting simulator to handle order governance --</p>

                <h6 className="u-margin-bottom-tiny c-modal-container__sub-title">Demo progress</h6>
                <ul className="u-margin-bottom-none">
                    <li>Connect a wallet.</li>
                    <li>Place a buy / sell order with the connected wallet.</li>
                    <li>Disconnect the currently used wallet.</li>
                    <li>
                        Switch to another wallet and connect it in order to match the order you&apos;ve just created.
                    </li>
                </ul>
                <p className="u-margin-bottom-none">-- todo: progress bar --</p>
            </Modal>
        </>
    );
};

export default DemoSettings;
