import React from 'react';

export const wasEnterOrSpacePressed = (e: React.KeyboardEvent<HTMLElement>) =>
    ['enter', ' '].includes(e.key.toLowerCase());

export const preventDefaultOnEnterOrSpace = (e: React.KeyboardEvent<HTMLElement>) =>
    wasEnterOrSpacePressed(e) && e.preventDefault();
