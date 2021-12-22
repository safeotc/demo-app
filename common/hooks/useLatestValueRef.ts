import { useEffect, useRef } from 'react';

const useLatestValueRef = <T>(value: T) => {
    const latestValueRef = useRef(value);

    useEffect(() => {
        latestValueRef.current = value;
    }, [latestValueRef, value]);

    return latestValueRef;
};

export default useLatestValueRef;
