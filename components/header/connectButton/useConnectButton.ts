import { useCallback, useContext, useState } from 'react';
import { wasEnterOrSpace } from '../../../common/helpers/keyboard';
import { DemoContext } from '../../demo/DemoProvider';
import { DEMO_WALLETS } from '../../demo/useDemo';
import { Wallet } from '../../wallet/useWallet';

const useConnectButton = (connect: (wallet: Wallet) => void) => {
    const [isPopoverOpened, setIsPopoverOpened] = useState(false);
    const openPopover = () => setIsPopoverOpened(true);
    const closePopover = () => setIsPopoverOpened(false);

    const { order } = useContext(DemoContext);
    const buyerAddress = order?.buyer;
    const sellerAddress = order?.seller;

    const walletListItems = DEMO_WALLETS.map((dM, i) => {
        const isBuyerAddress = buyerAddress === dM.address || (!!sellerAddress && sellerAddress !== dM.address);
        const isSellerAddress = sellerAddress === dM.address || (!!buyerAddress && buyerAddress !== dM.address);
        const label = `Demo wallet ${i + 1}${isBuyerAddress ? ' (buyer)' : isSellerAddress ? ' (seller)' : ''}`;
        const flatIcon = isBuyerAddress ? 'download' : isSellerAddress ? 'upload' : 'wallet';
        const iconClass = isBuyerAddress
            ? 'c-wallet-list__item-icon--buy'
            : isSellerAddress
            ? 'c-wallet-list__item-icon--sell'
            : '';
        return { label, flatIcon, iconClass, address: dM.address, onClick: () => connect(dM) };
    });

    const connectSelectedWalletOnEnterOrSpace = useCallback(
        (e: React.KeyboardEvent<HTMLElement>, address: string) => {
            const wallet = DEMO_WALLETS.find((dW) => dW.address === address);
            !!wallet && wasEnterOrSpace(e) && connect(wallet);
        },
        [connect]
    );

    return { isPopoverOpened, openPopover, closePopover, walletListItems, connectSelectedWalletOnEnterOrSpace };
};

export default useConnectButton;
