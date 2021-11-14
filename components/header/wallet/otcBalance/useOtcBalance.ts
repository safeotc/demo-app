import { useContext } from 'react';
import { AlertsContext } from '../../../alerts/AlertsProvider';

const useOtcBalance = (address: string) => {
    const { addSuccessAlert, addDangerAlert } = useContext(AlertsContext);

    const addressDisplay =
        address.length > 8 ? `${address.substr(0, 5)}...${address.substr(address.length - 3)}` : address;

    const copyAddressToClipBoardAndDisplayAlert = () => {
        if (!navigator) {
            addDangerAlert('Copying wallet address to clipboard failed.');
            return;
        }

        navigator.clipboard.writeText(address);
        addSuccessAlert('Wallet address was copied to clipboard.');
    };

    return { addressDisplay, copyAddressToClipBoardAndDisplayAlert };
};

export default useOtcBalance;
