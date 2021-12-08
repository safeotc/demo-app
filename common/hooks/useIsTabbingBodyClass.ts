import { useEffect } from 'react';
import { TABBING_BACKWARDS_CLASS, TABBING_CLASS } from '../constants/dom';

const useTabBodyClass = () => {
    useEffect(() => {
        if (!document || !document.body) {
            return;
        }

        const removeTabbingClasses = () => document.body.classList.remove(TABBING_CLASS, TABBING_BACKWARDS_CLASS);
        const removeTabbingBackwardsClass = () => document.body.classList.remove(TABBING_BACKWARDS_CLASS);
        const addTabbingClass = () => document.body.classList.add(TABBING_CLASS);
        const addTabbingBackwardsClass = () => document.body.classList.add(TABBING_BACKWARDS_CLASS);

        const mouseDownListener = () => removeTabbingClasses();
        const tabDownListener = (e: KeyboardEvent) => {
            if (e.key.toLowerCase() !== 'tab') {
                return;
            }
            addTabbingClass();

            if (!e.shiftKey) {
                removeTabbingBackwardsClass();
                return;
            }
            addTabbingBackwardsClass();
        };

        document.body.addEventListener('mousedown', mouseDownListener);
        document.body.addEventListener('keydown', tabDownListener);

        return () => {
            removeTabbingClasses();
            document.body.removeEventListener('mousedown', mouseDownListener);
            document.body.removeEventListener('keydown', tabDownListener);
        };
    }, []);
};

export default useTabBodyClass;
