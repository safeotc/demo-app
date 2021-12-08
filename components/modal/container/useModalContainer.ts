import { useCallback, useEffect, useRef } from 'react';

const useModalContainer = (isOpened: boolean) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const focusRef = useRef<HTMLDivElement>(null);
    const firstFocusableRef = useRef<HTMLElement | null>(null);
    const lastFocusableRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!isOpened || !focusRef.current) {
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

        const activeElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        firstFocusableRef.current.focus();

        return () => {
            firstFocusableRef.current = null;
            lastFocusableRef.current = null;
            !!activeElement && activeElement.focus();
        };
    }, [isOpened, focusRef, firstFocusableRef, lastFocusableRef]);

    const focusFirstFocusable = useCallback(() => firstFocusableRef.current?.focus(), [firstFocusableRef]);
    const focusLastFocusable = useCallback(() => lastFocusableRef.current?.focus(), [lastFocusableRef]);

    return { containerRef, focusRef, focusFirstFocusable, focusLastFocusable };
};

export default useModalContainer;
