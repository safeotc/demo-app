import { useContext } from 'react';
import { WalletContext } from '../../wallet/WalletProvider';

const useCreateNewOrderButton = () => {
    const { isConnected } = useContext(WalletContext);
    const isCreateButtonDisabled = !isConnected;
    const createButtonTitle = isCreateButtonDisabled ? 'Connect your wallet first.' : undefined;

    return { isCreateButtonDisabled, createButtonTitle };
};

export default useCreateNewOrderButton;
