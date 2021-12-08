import React from 'react';
import { ButtonProps } from '../../forms/buttons/Button';
import PrimaryButton from '../../forms/buttons/PrimaryButton';
import FlatIcon from '../../icons/FlatIcon';
import useCreateNewOrderButton from './useCreateNewOrderButton';

const CreateNewOrderButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
    const { isCreateButtonDisabled, createButtonTitle } = useCreateNewOrderButton();

    return (
        <PrimaryButton
            {...props}
            ref={ref}
            iconOnlyOn={['base', 's']}
            inlineOnMobile={true}
            disabled={isCreateButtonDisabled}
            title={createButtonTitle}
            icon={<FlatIcon icon="plus" />}
            className="c-orders-toolbar__create-new-button"
        >
            Create new order
        </PrimaryButton>
    );
});
CreateNewOrderButton.displayName = 'CreateNewOrderButton';

export default CreateNewOrderButton;
