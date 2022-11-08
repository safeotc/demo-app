import { useCallback, useContext, useState } from 'react';
import { AlertsContext } from '../../alerts/AlertsProvider';
import { DemoContext } from '../../demo/DemoProvider';
import { DEMO_WALLETS } from '../../demo/useDemo';
import { NullableRadioValue, RadioOption } from '../../forms/radios/Radios';
import { WalletContext } from '../../wallet/WalletProvider';

const useDemoSettings = () => {
    const [isOpened, setIsOpened] = useState(false);
    const showModal = () => setIsOpened(true);
    const hideModal = () => setIsOpened(false);

    const demoWallets = DEMO_WALLETS.map<RadioOption>((dM) => ({ label: dM.address, value: dM.address }));
    const { wallet, changeWallet, wasWelcomeScreenDisplayed, setWasWelcomeScreenDisplayed, completedSteps } =
        useContext(DemoContext);
    const changeDemoWallet = (walletAddress: NullableRadioValue) => !!walletAddress && changeWallet(walletAddress);
    const { isConnected } = useContext(WalletContext);

    const { addSuccessAlert } = useContext(AlertsContext);
    const isResetWelcomeScreenButtonDisabled = !wasWelcomeScreenDisplayed;
    const showWelcomeScreenOnReload = useCallback(() => {
        addSuccessAlert('Welcome screen will be shown again when reloading the application.');
        setWasWelcomeScreenDisplayed(false);
    }, [setWasWelcomeScreenDisplayed, addSuccessAlert]);

    return {
        isOpened,
        showModal,
        hideModal,
        connectedWalletAddress: wallet.address,
        changeDemoWallet,
        isConnected,
        demoWallets,
        isResetWelcomeScreenButtonDisabled,
        showWelcomeScreenOnReload,
        completedSteps,
    };
};

export default useDemoSettings;
