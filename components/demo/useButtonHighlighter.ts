import { useCallback, useState } from 'react';

const useButtonHightlighter = () => {
    const [isDemoProgressButtonHighlighted, setIsDemoProgressButtonHighlighted] = useState(false);
    const highlightDemoProgressButton = useCallback(
        () => setIsDemoProgressButtonHighlighted(true),
        [setIsDemoProgressButtonHighlighted]
    );
    const unhighlightDemoProgressButton = useCallback(
        () => setIsDemoProgressButtonHighlighted(false),
        [setIsDemoProgressButtonHighlighted]
    );

    return { isDemoProgressButtonHighlighted, highlightDemoProgressButton, unhighlightDemoProgressButton };
};

export default useButtonHightlighter;
