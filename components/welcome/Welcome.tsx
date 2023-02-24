import Image from 'next/image';
import Modal from '../modal/Modal';
import useWelcome from './useWelcome';
import mobileLocationImage from '../../public/images/demo-button-location-mobile.jpg';
import desktopLocationImage from '../../public/images/demo-button-location-desktop.jpg';

const Welcome = () => {
    const { isOpened, closeModal } = useWelcome();

    return (
        <Modal
            isOpened={isOpened}
            onCloseRequest={closeModal}
            size="m"
            boxProps={{ className: 'c-modal-welcome__background' }}
        >
            <h1 className="c-modal-welcome__title">Welcome</h1>

            <p className="u-margin-bottom-large">
                Click on the demo progress button located on the left-hand side of the screen under the main menu to
                find out more about demo app functionality and how to use it.
            </p>

            <div className="c-modal-welcome__locations">
                <div className="c-modal-welcome__location">
                    <span className="u-text-bold u-text-center u-text-ellipsis u-margin-bottom-small">Mobile view</span>
                    <div className="c-modal-welcome__img c-modal-welcome__img--mobile">
                        <Image
                            layout="fill"
                            src={mobileLocationImage}
                            alt="Location of the demo progress button on mobile devices"
                        />
                    </div>
                </div>
                <div className="c-modal-welcome__location">
                    <span className="u-text-bold u-text-center u-text-ellipsis u-margin-bottom-small">
                        Desktop view
                    </span>
                    <div className="c-modal-welcome__img c-modal-welcome__img--desktop">
                        <Image
                            layout="fill"
                            src={desktopLocationImage}
                            alt="Location of demo progress button on desktop devices"
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default Welcome;
