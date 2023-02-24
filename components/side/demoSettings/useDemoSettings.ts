import { useCallback, useContext, useState } from 'react';
import { AlertsContext } from '../../alerts/AlertsProvider';
import { DemoContext } from '../../demo/DemoProvider';

const useDemoSettings = () => {
    const [isOpened, setIsOpened] = useState(false);
    const showModal = () => setIsOpened(true);
    const hideModal = () => setIsOpened(false);

    const { wasWelcomeScreenDisplayed, setWasWelcomeScreenDisplayed, completedSteps } = useContext(DemoContext);
    const isResetWelcomeScreenButtonDisabled = !wasWelcomeScreenDisplayed;

    const { addSuccessAlert } = useContext(AlertsContext);
    const showWelcomeScreenOnReload = useCallback(() => {
        addSuccessAlert('Welcome screen will be shown again when reloading the application.');
        setWasWelcomeScreenDisplayed(false);
    }, [setWasWelcomeScreenDisplayed, addSuccessAlert]);

    return {
        isOpened,
        showModal,
        hideModal,
        completedSteps,
        isResetWelcomeScreenButtonDisabled,
        showWelcomeScreenOnReload,
    };
};

export default useDemoSettings;
