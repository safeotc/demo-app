import { useCallback, useEffect, useRef, useState } from 'react';
import { AlertOnClose } from './Alert';

class AlertTimeout {
    private animationId: number;
    private startTimestamp: number;
    private intervalElapsed: number;
    private timeout: number;
    private timeoutLeft: number;
    private onUpdate: (percentDone: number) => void;
    private onFinished: () => void;
    public percentDone: number;

    constructor(timeout: number, onUpdate: (percentDone: number) => void, onFinished: () => void) {
        this.animationId = 0;
        this.startTimestamp = 0;
        this.intervalElapsed = 0;
        this.timeout = timeout;
        this.timeoutLeft = timeout;
        this.onUpdate = onUpdate;
        this.onFinished = onFinished;
        this.percentDone = 0;

        this.resume();
    }

    public pause = () => {
        cancelAnimationFrame(this.animationId);
        this.animationId = 0;
        this.startTimestamp = 0;
        this.timeoutLeft -= this.intervalElapsed;
    };

    public resume = () => {
        !this.animationId && this.requestAnimationFrame();
    };

    private requestAnimationFrame = () => {
        this.animationId = requestAnimationFrame(this.onAnimationFrame);
    };

    private onAnimationFrame: FrameRequestCallback = (timestamp) => {
        const onFinishedAlreadyCalled = this.timeoutLeft === 0;
        if (onFinishedAlreadyCalled) {
            return;
        }

        !this.startTimestamp && (this.startTimestamp = timestamp);
        this.intervalElapsed = timestamp - this.startTimestamp;
        this.intervalElapsed > this.timeoutLeft && (this.intervalElapsed = this.timeoutLeft);

        const previousIntervalsElapsed = this.timeout - this.timeoutLeft;
        const totalElapsed = previousIntervalsElapsed + this.intervalElapsed;
        this.percentDone = Number(((totalElapsed / this.timeout) * 100).toFixed(2));
        this.onUpdate(this.percentDone);

        const isFinished = this.percentDone === 100;
        isFinished ? this.onFinished() : this.requestAnimationFrame();
    };
}

const useAlert = (id: string, onClose?: AlertOnClose, disposeTimeout?: number) => {
    const alertTimeoutRef = useRef<AlertTimeout>();
    const [timeoutPercentDone, setTimeoutPercentDone] = useState(0);

    const closeAlert = useCallback(() => !!onClose && onClose(id), [id, onClose]);
    const pauseDisposing = () => alertTimeoutRef.current?.pause();
    const resumeDisposing = () => alertTimeoutRef.current?.resume();

    useEffect(() => {
        if (disposeTimeout === undefined) {
            return;
        }

        alertTimeoutRef.current = new AlertTimeout(disposeTimeout, setTimeoutPercentDone, closeAlert);

        return () => {
            alertTimeoutRef.current?.pause();
        };
    }, [disposeTimeout, closeAlert]);

    return { timeoutPercentDone, pauseDisposing, resumeDisposing, closeAlert };
};

export default useAlert;
