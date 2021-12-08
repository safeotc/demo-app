import { useCallback, useState } from 'react';

const useModal = (isOpened: boolean) => {
    const [isWrapperVisible, setIsWrapperVisible] = useState(isOpened);
    const onWrapperEnter = useCallback(() => setIsWrapperVisible(true), [setIsWrapperVisible]);
    const onWrapperExited = useCallback(() => setIsWrapperVisible(false), [setIsWrapperVisible]);
    const isContainerOpened = isOpened && isWrapperVisible;

    return { isContainerOpened, onWrapperEnter, onWrapperExited };
};

export default useModal;
