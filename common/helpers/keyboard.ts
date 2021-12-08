import React from 'react';

export const wasEnterOrSpace = (e: React.KeyboardEvent<HTMLElement>) => ['enter', ' '].includes(e.key.toLowerCase());

export const wasEscape = (e: React.KeyboardEvent<HTMLElement>) => e.key.toLowerCase() === 'escape';

export const preventDefaultOnEnterOrSpace = (e: React.KeyboardEvent<HTMLElement>) =>
    wasEnterOrSpace(e) && e.preventDefault();
