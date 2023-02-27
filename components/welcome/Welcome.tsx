import PrimaryButton from '../forms/buttons/PrimaryButton';
import Modal from '../modal/Modal';
import useWelcome from './useWelcome';

const Welcome = () => {
    const { isOpened, closeModalAndHighlightDemoProgressButton } = useWelcome();

    return (
        <Modal
            isOpened={isOpened}
            onCloseRequest={closeModalAndHighlightDemoProgressButton}
            size="m"
            boxProps={{ className: 'c-modal-welcome__background' }}
        >
            <h1 className="c-modal-welcome__title">
                Welcome <span className="to">to</span>
                <br className="new-line" />
                <span className="safeotc">SafeOTC</span>
            </h1>

            <p className="u-margin-bottom-large u-text-bold">
                Let’s start with the DEMO application for the first Decentralized OTC (Over-The-Counter) trading
                platform where you can make an OTC deal in a secure, fast and easy way without the use of an escrow or a
                3rd party.
            </p>

            <p className="u-margin-bottom-large u-text-bold">
                Click on the DEMO PROGRESS button located on the left-hand side of the screen under the main menu to
                find out more about demo app functionality and how to use it.
            </p>

            <div className="u-text-center">
                <PrimaryButton onClick={closeModalAndHighlightDemoProgressButton}>Start DEMO</PrimaryButton>
            </div>
        </Modal>
    );
};

export default Welcome;
