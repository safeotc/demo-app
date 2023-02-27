import Modal from '../modal/Modal';
import useCongratulations from './useCongratulations';
import Confetti from 'react-confetti';
import SecondaryButton from '../forms/buttons/SecondaryButton';
import FlatIcon from '../icons/FlatIcon';

const Congratulations = () => {
    const { width, height, showCongratulations, restartDemoApp } = useCongratulations();

    return (
        <>
            {showCongratulations && (
                <Confetti className="c-confetti" numberOfPieces={100} width={width} height={height} gravity={0.05} />
            )}

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

                <div className="u-text-center">
                    <SecondaryButton size="l" icon={<FlatIcon icon="refresh" />} onClick={restartDemoApp}>
                        Start over
                    </SecondaryButton>
                </div>
            </Modal>
        </>
    );
};

export default Congratulations;
