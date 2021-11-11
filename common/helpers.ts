import React from 'react';
import { SCREEN_SIZES } from './constants';
import { ScreenSize } from './types';
import cn from 'classnames';

export const getResponsiveClassnames = (baseClassname: string, divider: string, screenSizes?: ScreenSize[]) => {
    const classnames: string[] = [];
    for (let screenSize of SCREEN_SIZES) {
        if (!screenSizes?.find((ss) => ss === screenSize)) {
            continue;
        }
        classnames.push(`${baseClassname}${divider}${screenSize}`);
    }
    return cn(classnames);
};

export const wasEnterOrSpacePressed = (e: React.KeyboardEvent<HTMLElement>) =>
    ['enter', ' '].includes(e.key.toLowerCase());

export const preventDefaultOnEnterOrSpace = (e: React.KeyboardEvent<HTMLElement>) =>
    wasEnterOrSpacePressed(e) && e.preventDefault();
