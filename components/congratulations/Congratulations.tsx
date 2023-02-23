import Modal from '../modal/Modal';
import useCongratulations from './useCongratulations';

const Congratulations = () => {
    const showCongratulations = useCongratulations();

    return (
        <>
            <Modal
                isOpened={showCongratulations}
                size="m"
                boxProps={{ className: 'c-modal-congratulations__background' }}
            >
                <h1 className="c-modal-congratulations__title u-text-ellipsis">Congratulations!</h1>

                <p className="c-modal-congratulations__text u-margin-bottom-large">
                    You&apos;ve made it to the end of our demo application! You successfully simulated an OTC deal
                    between two parties without an escrow!
                </p>
            </Modal>
        </>
    );
};

export default Congratulations;
