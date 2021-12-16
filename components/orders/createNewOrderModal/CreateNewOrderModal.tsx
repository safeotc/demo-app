import React from 'react';
import Modal, { ModalProps } from '../../modal/Modal';
import TabItem from '../../tabs/TabItem';
import Tabs from '../../tabs/Tabs';
import BuyTab from './BuyTab';
import SellTab from './SellTab';
import useCreateNewOrderModal from './useCreateNewOrderModal';

interface CreateNewOrderModalProps extends Pick<ModalProps, 'isOpened' | 'onCloseRequest'> {}

const CreateNewOrderModal: React.FC<CreateNewOrderModalProps> = (props) => {
    const { isTabActive, changeTab } = useCreateNewOrderModal();

    return (
        <Modal {...props} size="m" contentProps={{ className: 'c-modal-container__content--create-new-order' }}>
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

            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                {isTabActive('buy') && <BuyTab />}
                {isTabActive('sell') && <SellTab />}
            </div>
        </Modal>
    );
};

export default CreateNewOrderModal;
