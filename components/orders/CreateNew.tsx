import React, { useContext } from 'react';
import PrimaryButton from '../forms/buttons/PrimaryButton';
import FlatIcon from '../icons/FlatIcon';
import { WalletContext } from '../wallet/WalletProvider';

const CreateNew: React.FC = () => {
    const { isConnected } = useContext(WalletContext);
    const isCreateButtonDisabled = !isConnected;
    const createButtonTitle = isCreateButtonDisabled ? 'Connect your wallet first.' : undefined;

    return (
        <div className="c-orders-toolbar__create-new-wrapper">
            <PrimaryButton
                iconOnlyOn={['base', 's']}
                inlineOnMobile={true}
                disabled={isCreateButtonDisabled}
                title={createButtonTitle}
                icon={<FlatIcon icon="plus" />}
                className="c-orders-toolbar__create-new-button"
            >
                Create new order
            </PrimaryButton>
        </div>
    );
};

export default CreateNew;
