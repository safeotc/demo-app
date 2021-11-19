import React from 'react';
import { CSSTransition } from 'react-transition-group';
import cn from 'classnames';
import { ScreenSize } from '../../common/types/screen';
import { getResponsiveClassnames } from '../../common/helpers/classnames';
import usePopover from './usePopover';

export type PopoverPosition = 'topRight' | 'bottomRight';
export type PopoverPositionOn = [ScreenSize, PopoverPosition];

interface PopoverProps {
    popover: JSX.Element;
    position?: PopoverPosition;
    positionOn?: PopoverPositionOn[];
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
    const { popoverContentRef, getScreenSizesForPositionOn } = usePopover(isOpened, onCloseRequest, positionOn);

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
