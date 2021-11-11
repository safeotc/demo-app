import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import cn from 'classnames';
import { ScreenSize } from '../../common/types';
import { getResponsiveClassnames } from '../../common/helpers';

type PopoverPosition = 'topRight' | 'bottomRight';

interface PopoverProps {
    popover: JSX.Element;
    position?: PopoverPosition;
    positionOn?: [ScreenSize, PopoverPosition][];
    isOpened: boolean;
    onCloseRequest: () => void;
    onEnterStart?: () => void;
    onEnterDone?: () => void;
    onExitStart?: () => void;
    onExitDone?: () => void;
}

const Popover: React.FC<PopoverProps> = ({
    popover,
    position,
    positionOn,
    isOpened,
    onCloseRequest,
    onEnterStart,
    onEnterDone,
    onExitStart,
    onExitDone,
    children,
}) => {
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

        // dodaj loop ko se focus zgubi, da gre spet na prvi element, ki je focusable
    }, [popoverContentRef, isOpened, onCloseRequest]);

    const getScreenSizesForPositionOn = (position: PopoverPosition) =>
        positionOn?.filter((pO) => pO[1] === position)?.map((pO) => pO[0]) || [];

    const popoverContentClasses = cn(
        'c-popover__content',
        getResponsiveClassnames('c-popover__content--bottom-right', '-', getScreenSizesForPositionOn('bottomRight')),
        getResponsiveClassnames('c-popover__content--top-right', '-', getScreenSizesForPositionOn('topRight')),
        {
            'c-popover__content--bottom-right': position === 'bottomRight',
            'c-popover__content--top-right': position === 'topRight',
        }
    );

    return (
        <span className="c-popover">
            {children}
            <CSSTransition
                nodeRef={popoverContentRef}
                in={isOpened}
                mountOnEnter={false}
                unmountOnExit={false}
                classNames={{
                    enter: 'c-popover__content--enter',
                    enterActive: 'c-popover__content--enter-active',
                    enterDone: 'c-popover__content--enter-done',
                    exit: 'c-popover__content--exit',
                    exitActive: 'c-popover__content--exit-active',
                }}
                timeout={{ enter: 100, exit: 0 }}
                onEnter={onEnterStart}
                onEntered={onEnterDone}
                onExit={onExitStart}
                onExited={onExitDone}
            >
                <div className={popoverContentClasses} ref={popoverContentRef}>
                    {popover}
                </div>
            </CSSTransition>
        </span>
    );
};

export default Popover;
