import { useEffect, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';

const useInputTooltip = () => {
    const [id, setId] = useState<string>();

    useEffect(() => {
        if (!!id) {
            return;
        }

        setId(uuidV4());
    }, [id, setId]);

    return id;
};

export default useInputTooltip;
