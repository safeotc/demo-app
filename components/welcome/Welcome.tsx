import Modal from '../modal/Modal';
import ModalTitle from '../modal/ModalTitle';
import useWelcome from './useWelcome';

const Welcome = () => {
    const { isOpened, closeModal } = useWelcome();

    return (
        <Modal isOpened={isOpened} onCloseRequest={closeModal} size="m">
            <ModalTitle>Demo application info</ModalTitle>
            Welcome to our demo application.
            <br />
            <br />
            Click on the demo settings button located on the left-hand side of the screen under the main menu to find
            out more about the demo app functionality.
            <br />
            <br />
            -- TODO: some graphics etc. --
        </Modal>
    );
};

export default Welcome;
