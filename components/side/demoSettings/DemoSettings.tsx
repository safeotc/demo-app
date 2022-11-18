import WarningAlert from '../../alerts/types/WarningAlert';
import CompletedSteps from '../../completedSteps/CompletedSteps';
import Button from '../../forms/buttons/Button';
import SecondaryButton from '../../forms/buttons/SecondaryButton';
import Radios from '../../forms/radios/Radios';
import FlatIcon from '../../icons/FlatIcon';
import Modal from '../../modal/Modal';
import ModalTitle from '../../modal/ModalTitle';
import useDemoSettings from './useDemoSettings';

const DemoSettings = () => {
    const {
        isOpened,
        showModal,
        hideModal,
        connectedWalletAddress,
        changeDemoWallet,
        isConnected,
        demoWallets,
        isResetWelcomeScreenButtonDisabled,
        showWelcomeScreenOnReload,
        completedSteps,
    } = useDemoSettings();

    return (
        <>
            <div className="u-text-center">
                <SecondaryButton
                    inlineOnMobile={true}
                    size="s"
                    iconOnlyOn={['base', 's', 'm']}
                    icon={<FlatIcon title="Demo settings" icon="settings-sliders" />}
                    onClick={showModal}
                >
                    Demo settings
                </SecondaryButton>
            </div>

            <Modal size="m" isOpened={isOpened} onCloseRequest={hideModal}>
                <ModalTitle>Demo application settings</ModalTitle>

                <div className="u-margin-bottom-large">
                    <h6 className="c-modal-container__sub-title">Wallet selection</h6>
                    <p className="u-margin-bottom">
                        Select the wallet you want to connect to the application. The selected wallet will be used for
                        creating/accepting orders.
                    </p>

                    <Radios
                        name="wallet-selection"
                        options={demoWallets}
                        value={connectedWalletAddress}
                        onChange={changeDemoWallet}
                        disabled={isConnected}
                        textOverflow="ellipsis"
                    />

                    {isConnected && (
                        <WarningAlert
                            className="u-margin-top"
                            id="wallet-connected-alert"
                            content="Please disconnect the wallet you are currently using in order to switch to another wallet."
                        />
                    )}
                </div>

                <div className="u-margin-bottom-large">
                    <h6 className="c-modal-container__sub-title">Demo progress</h6>
                    <CompletedSteps
                        completedSteps={completedSteps}
                        className="u-margin-bottom-none u-margin-left-none"
                    />
                </div>

                <div className="u-margin-bottom-large">
                    <h6 className="c-modal-container__sub-title">Token generation event</h6>
                    <p className="u-margin-bottom">
                        Once an order is created and accepted, button for TGE will be enabled. This is used to simulate
                        token generation event and distribution of tokens to the seller, so he can keep up his end of
                        the deal by sending those tokens to the buyer.
                    </p>
                    <Button disabled={true}>Simulate TGE</Button>
                </div>

                <div>
                    <h6 className="c-modal-container__sub-title">Welcome screen</h6>
                    <p className="u-margin-bottom">
                        Welcome screen is displayed only on the first page load. It contains information about where to
                        start. In case you have missed it, enable it again by clicking on the button below and reload
                        the page.
                    </p>
                    <Button disabled={isResetWelcomeScreenButtonDisabled} onClick={showWelcomeScreenOnReload}>
                        Display welcome screen again
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default DemoSettings;
