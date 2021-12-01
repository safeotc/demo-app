import React from 'react';
import CreateNewOrderButton from '../../components/orders/CreateNewOrderButton';

const CreateNew: React.FC = () => {
    return (
        <div className="c-orders-toolbar__create-new-wrapper">
            <CreateNewOrderButton />
        </div>
    );
};

export default CreateNew;
