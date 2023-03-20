import InfoAlert from '../../alerts/types/InfoAlert';
import Modal, { ModalProps } from '../../modal/Modal';
import TabContent from '../../tabs/content/TabContent';
import TabItem from '../../tabs/TabItem';
import Tabs from '../../tabs/Tabs';
import BuyTab from './BuyTab';
import SellTab from './SellTab';
import useCreateNewOrderModal from './useCreateNewOrderModal';

interface CreateNewOrderModalProps extends Pick<ModalProps, 'isOpened'> {
    onCloseRequest: () => void;
}

const CreateNewOrderModal = (props: CreateNewOrderModalProps) => {
    const { onCloseRequest } = props;
    const { isTabActive, changeTab, showResultAndCloseModalOnSuccess } = useCreateNewOrderModal(onCloseRequest);

    return (
        <Modal {...props} skipSettingFocusables={true} size="m">
            {(updateFocusables) => (
                <>
                    <div className="u-margin-bottom-large">
                        <Tabs align="center">
                            <TabItem isActive={isTabActive('buy')}>
                                <button className="c-tabs__link" onClick={changeTab('buy')}>
                                    Buy
                                </button>
                            </TabItem>

                            <TabItem isActive={isTabActive('sell')}>
                                <button className="c-tabs__link" onClick={changeTab('sell')}>
                                    Sell
                                </button>
                            </TabItem>
                        </Tabs>
                    </div>

                    <div className="c-modal-container__form c-modal-create-new-order__form">
                        <div className="u-margin-bottom">
                            <InfoAlert
                                hideCloseButton={true}
                                content="This is a simplified create order form used only for the purposes of this demo application. Production version will contain many more options for defining an OTC order."
                                id="info-alert"
                            />
                        </div>

                        <TabContent isOpened={isTabActive('buy')} onOpen={updateFocusables}>
                            <BuyTab onProcessed={showResultAndCloseModalOnSuccess} />
                        </TabContent>

                        <TabContent isOpened={isTabActive('sell')} onOpen={updateFocusables}>
                            <SellTab onProcessed={showResultAndCloseModalOnSuccess} />
                        </TabContent>
                    </div>
                </>
            )}
        </Modal>
    );
};

export default CreateNewOrderModal;
