import { useCallback, useEffect, useRef } from 'react';
import { ModalChildren } from '../Modal';

const useModalContainer = (children: ModalChildren, skipSettingFocusables?: boolean) => {
    const focusRef = useRef<HTMLDivElement>(null);
    const firstFocusableRef = useRef<HTMLElement | null>(null);
    const lastFocusableRef = useRef<HTMLElement | null>(null);

    const updateFocusables = useCallback(() => {
        if (!focusRef.current) {
            return;
        }

        const focusableNodes = focusRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        const focusableNodesReducer = (elements: HTMLElement[], element: Element) => {
            element instanceof HTMLElement && elements.push(element);
            return elements;
        };
        const focusable = Array.from(focusableNodes).reduce<HTMLElement[]>(focusableNodesReducer, []);

        firstFocusableRef.current = focusable[0];
        lastFocusableRef.current = focusable[focusable.length - 1];
    }, [focusRef, firstFocusableRef, lastFocusableRef]);

    const focusFirstFocusable = useCallback(() => firstFocusableRef.current?.focus(), [firstFocusableRef]);

    const focusLastFocusable = useCallback(() => lastFocusableRef.current?.focus(), [lastFocusableRef]);

    const renderChildren = () => (children instanceof Function ? children(updateFocusables) : children);

    useEffect(() => {
        !skipSettingFocusables && updateFocusables();

        const activeElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        firstFocusableRef?.current?.focus();

        return () => {
            !!activeElement && activeElement.focus();
        };
    }, [updateFocusables, firstFocusableRef, skipSettingFocusables]);

    return { focusRef, focusFirstFocusable, focusLastFocusable, renderChildren };
};

export default useModalContainer;
