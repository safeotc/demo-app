import CreateNewOrderButton from '../../../components/orders/createNewOrderButton/CreateNewOrderButton';
import CreateNewOrderModal from '../../../components/orders/createNewOrderModal/CreateNewOrderModal';
import useCreateNew from './useCreateNew';

const CreateNew = () => {
    const { tryOpeningModal, closeModal, isModalOpened } = useCreateNew();

    return (
        <div className="c-orders-toolbar__create-new-wrapper">
            <CreateNewOrderButton onClick={tryOpeningModal} />
            <CreateNewOrderModal isOpened={isModalOpened} onCloseRequest={closeModal} />
        </div>
    );
};

export default CreateNew;
