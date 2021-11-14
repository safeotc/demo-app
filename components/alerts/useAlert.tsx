import { useCallback, useEffect } from 'react';
import { AlertOnClose } from './Alert';

const useAlert = (id: string, onClose: AlertOnClose, disposeTimeout?: number) => {
    const closeAlert = useCallback(() => onClose(id), [id, onClose]);

    useEffect(() => {
        if (disposeTimeout === undefined) {
            return;
        }

        const disposeTimeoutId = setTimeout(closeAlert, disposeTimeout);

        () => {
            clearTimeout(disposeTimeoutId);
        };
    }, [disposeTimeout, closeAlert]);

    return { closeAlert };
};

export default useAlert;
