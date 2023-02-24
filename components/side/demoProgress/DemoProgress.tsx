import CompletedSteps from '../../completedSteps/CompletedSteps';
import SecondaryButton from '../../forms/buttons/SecondaryButton';
import FlatIcon from '../../icons/FlatIcon';
import Modal from '../../modal/Modal';
import ModalTitle from '../../modal/ModalTitle';
import useDemoProgress from './useDemoProgress';

const DemoProgress = () => {
    const { isOpened, showModal, hideModal, completedSteps } = useDemoProgress();

    return (
        <>
            <div className="u-text-center">
                <SecondaryButton
                    inlineOnMobile={true}
                    size="s"
                    iconOnlyOn={['base', 's', 'm']}
                    icon={<FlatIcon title="Demo progress" icon="signal-alt-1" />}
                    onClick={showModal}
                >
                    Demo progress
                </SecondaryButton>
            </div>

            <Modal size="m" isOpened={isOpened} onCloseRequest={hideModal}>
                <ModalTitle>Demo progress</ModalTitle>
                <CompletedSteps completedSteps={completedSteps} className="u-margin-bottom-none u-margin-left-none" />
            </Modal>
        </>
    );
};

export default DemoProgress;
