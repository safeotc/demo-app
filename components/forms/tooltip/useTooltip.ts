import { useState, useCallback, useRef } from 'react';
import { v4 as uuidV4 } from 'uuid';

const useTooltip = () => {
    const [tooltip, setTooltip] = useState(true);

    const tooltipIdRef = useRef(uuidV4());
    const tooltipId = tooltipIdRef.current;

    const showTooltip = useCallback(() => setTooltip(true), [setTooltip]);
    const hideTooltip = useCallback(() => {
        setTooltip(false);
        setTimeout(() => setTooltip(true), 50);
    }, [setTooltip]);

    return { tooltip, tooltipId, showTooltip, hideTooltip };
};

export default useTooltip;
