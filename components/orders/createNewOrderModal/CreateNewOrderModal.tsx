import Modal, { ModalProps } from '../../modal/Modal';
import TabContent from '../../tabs/content/TabContent';
import TabItem from '../../tabs/TabItem';
import Tabs from '../../tabs/Tabs';
import BuyTab from './BuyTab';
import SellTab from './SellTab';
import useCreateNewOrderModal from './useCreateNewOrderModal';

interface CreateNewOrderModalProps extends Pick<ModalProps, 'isOpened' | 'onCloseRequest'> {}

const CreateNewOrderModal = (props: CreateNewOrderModalProps) => {
    const { isTabActive, changeTab } = useCreateNewOrderModal();

    return (
        <Modal
            {...props}
            skipSettingFocusables={true}
            size="m"
            boxProps={{ className: 'c-modal-create-new-order__background' }}
        >
            {(updateFocusables) => (
                <div className="c-modal-create-new-order__foreground">
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
                        <TabContent isOpened={isTabActive('buy')} onOpen={updateFocusables}>
                            <BuyTab />
                        </TabContent>

                        <TabContent isOpened={isTabActive('sell')} onOpen={updateFocusables}>
                            <SellTab />
                        </TabContent>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default CreateNewOrderModal;
