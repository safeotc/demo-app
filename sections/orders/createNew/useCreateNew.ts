import { useCallback, useState } from 'react';

const useCreateNew = () => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const openModal = useCallback(() => setIsModalOpened(true), [setIsModalOpened]);
    const closeModal = useCallback(() => setIsModalOpened(false), [setIsModalOpened]);

    return { isModalOpened, openModal, closeModal };
};

export default useCreateNew;
