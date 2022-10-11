import { useState } from 'react';
import SecondaryButton from '../forms/buttons/SecondaryButton';
import FlatIcon from '../icons/FlatIcon';
import Modal from '../modal/Modal';
import ModalTitle from '../modal/ModalTitle';

const DemoSettings = () => {
    const [isOpened, setIsOpened] = useState(false);
    const showModal = () => setIsOpened(true);
    const hideModal = () => setIsOpened(false);

    return (
        <>
            <div className="u-text-center u-margin-top-huge">
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
                <p>The selected wallet will be used for making/matching orders.</p>
                <p>
                    -- todo: make wallet selection, only make it available if the current wallet is not connected, also
                    make disconnect screen for the wallet --
                </p>

                <h6 className="u-margin-bottom-tiny c-modal-container__sub-title">Voting simulation</h6>
                <p>-- todo: make voting simulator to handle order governance --</p>

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
