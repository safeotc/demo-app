import InfoAlert from '../../alerts/types/InfoAlert';
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
                    <h6 className="u-margin-bottom-tiny c-modal-container__sub-title">Demo progress</h6>
                    <CompletedSteps completedSteps={completedSteps} className="u-margin-bottom-none" />
                    <p className="u-margin-bottom-none">-- todo: progress bar, MAYBE --</p>
                </div>

                <div className="u-margin-bottom-large">
                    <h6 className="u-margin-bottom-tiny c-modal-container__sub-title">Wallet to connect with</h6>
                    <p className="u-margin-bottom">
                        Select the wallet you want to connect to the application. The selected wallet will be used for
                        making/matching orders.
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
                    <h6 className="u-margin-bottom-tiny c-modal-container__sub-title">Voting simulation</h6>
                    <Button disabled={true}>Simulate order voting</Button>
                    <InfoAlert
                        hideCloseButton={true}
                        id="voting-simulation-alert"
                        className="u-margin-top"
                        content="Place an order and match it to enable voting simulation."
                    />
                </div>

                <div>
                    <h6 className="u-margin-bottom-tiny c-modal-container__sub-title">Welcome screen</h6>
                    <Button disabled={isResetWelcomeScreenButtonDisabled} onClick={showWelcomeScreenOnReload}>
                        Display welcome screen again
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default DemoSettings;
