import { useEffect } from 'react';

const useTabBodyClass = () => {
    useEffect(() => {
        if (!document || !document.body) {
            return;
        }

        const tabbingClassName = 'is-tabbing';
        const removeTabbingClass = () => document.body.classList.remove(tabbingClassName);
        const addTabbingClass = () => document.body.classList.add(tabbingClassName);

        const mouseDownListener = () => removeTabbingClass();
        const tabDownListener = (e: KeyboardEvent) => e.key.toLowerCase() === 'tab' && addTabbingClass();

        document.body.addEventListener('mousedown', mouseDownListener);
        document.body.addEventListener('keydown', tabDownListener);

        return () => {
            removeTabbingClass();
            document.body.removeEventListener('mousedown', mouseDownListener);
            document.body.removeEventListener('keydown', tabDownListener);
        };
    }, []);
};

export default useTabBodyClass;
