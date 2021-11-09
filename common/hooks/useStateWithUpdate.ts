import { Dispatch, SetStateAction, useCallback, useState } from 'react';

const useStateWithUpdate = <T>(initialState: T): [T, Dispatch<SetStateAction<T>>, (newState: Partial<T>) => void] => {
    const [state, setState] = useState(initialState);

    const updateState = useCallback(
        (newState: Partial<T>) => {
            setState((s) => ({ ...s, ...newState }));
        },
        [setState]
    );

    return [state, setState, updateState];
};

export default useStateWithUpdate;
