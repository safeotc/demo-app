import { useState, useCallback } from 'react';

const useTooltip = () => {
    const [tooltip, setTooltip] = useState(true);

    const showTooltip = useCallback(() => setTooltip(true), [setTooltip]);
    const hideTooltip = useCallback(() => {
        setTooltip(false);
        setTimeout(() => setTooltip(true), 50);
    }, [setTooltip]);

    return { tooltip, showTooltip, hideTooltip };
};

export default useTooltip;
