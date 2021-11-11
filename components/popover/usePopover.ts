import React, { useEffect } from 'react';
import { PopoverPosition, PopoverPositionOn } from './Popover';

const usePopover = (isOpened: boolean, onCloseRequest: () => void, positionOn?: PopoverPositionOn[]) => {
    const popoverContentRef = React.createRef<HTMLDivElement>();

    useEffect(() => {
        if (!isOpened || !popoverContentRef.current) {
            return;
        }

        const currentPopoverContentRef = popoverContentRef.current;
        let clickHappenedInsidePopoverContent = true;

        const popoverContentOnClickCaptureListener = () => {
            clickHappenedInsidePopoverContent = true;
        };

        const documentOnClickBubbleListener = () => {
            const shouldRequestPopoverClose = !clickHappenedInsidePopoverContent;
            clickHappenedInsidePopoverContent = false;
            shouldRequestPopoverClose && onCloseRequest();
        };

        currentPopoverContentRef.addEventListener('click', popoverContentOnClickCaptureListener, true);
        document.addEventListener('click', documentOnClickBubbleListener, false);

        const documentEscKeyUpBubbleListener = (e: KeyboardEvent) => {
            e.key.toLowerCase() === 'escape' && onCloseRequest();
        };

        document.addEventListener('keyup', documentEscKeyUpBubbleListener, false);

        return () => {
            currentPopoverContentRef.removeEventListener('click', popoverContentOnClickCaptureListener, true);
            document.removeEventListener('click', documentOnClickBubbleListener, false);
            document.removeEventListener('keyup', documentEscKeyUpBubbleListener, false);
        };
    }, [popoverContentRef, isOpened, onCloseRequest]);

    const getScreenSizesForPositionOn = (position: PopoverPosition) =>
        positionOn?.filter((pO) => pO[1] === position)?.map((pO) => pO[0]) || [];

    return {
        popoverContentRef,
        getScreenSizesForPositionOn,
    };
};

export default usePopover;
