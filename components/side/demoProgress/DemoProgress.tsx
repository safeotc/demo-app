import CompletedSteps from '../../completedSteps/CompletedSteps';
import SecondaryButton from '../../forms/buttons/SecondaryButton';
import FlatIcon from '../../icons/FlatIcon';
import Modal from '../../modal/Modal';
import ModalTitle from '../../modal/ModalTitle';
import useDemoProgress from './useDemoProgress';
import cn from 'classnames';

const DemoProgress = () => {
    const { isOpened, showModalAndUnhighlightButton, hideModal, completedSteps, isDemoProgressButtonHighlighted } =
        useDemoProgress();
    const buttonWrapperClasses = cn('c-demo-progress', 'u-text-center', {
        'c-demo-progress--highlight': isDemoProgressButtonHighlighted,
    });

    return (
        <>
            <div className={buttonWrapperClasses}>
                <SecondaryButton
                    inlineOnMobile={true}
                    size="s"
                    iconOnlyOn={['base', 's', 'm']}
                    icon={<FlatIcon title="Demo progress" icon="signal-alt-1" />}
                    onClick={showModalAndUnhighlightButton}
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
