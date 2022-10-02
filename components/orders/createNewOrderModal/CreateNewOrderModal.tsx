import Modal, { ModalProps } from '../../modal/Modal';
import TabContent from '../../tabs/content/TabContent';
import TabItem from '../../tabs/TabItem';
import Tabs from '../../tabs/Tabs';
import BuyTab from './tabs/BuyTab';
import SellTab from './tabs/SellTab';
import useCreateNewOrderModal from './useCreateNewOrderModal';

interface CreateNewOrderModalProps extends Pick<ModalProps, 'isOpened' | 'onCloseRequest'> {}

const CreateNewOrderModal = (props: CreateNewOrderModalProps) => {
    const { isTabActive, changeTab } = useCreateNewOrderModal();

    return (
        <Modal
            {...props}
            skipSettingFocusables={true}
            size="m"
            boxProps={{ className: 'c-modal-container__box--create-new-order' }}
        >
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

                    <div className="c-modal-container__form c-modal-container__form--create-new-order">
                        <TabContent isOpened={isTabActive('buy')} onOpen={updateFocusables}>
                            <BuyTab />
                        </TabContent>

                        <TabContent isOpened={isTabActive('sell')} onOpen={updateFocusables}>
                            <SellTab />
                        </TabContent>
                    </div>
                </>
            )}
        </Modal>
    );
};

export default CreateNewOrderModal;
