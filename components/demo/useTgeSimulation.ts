import { useCallback, useState } from 'react';

const useTgeSimulation = () => {
    const [wasTgeSimulated, setWasTgeSimulated] = useState(false);
    const simulateTge = useCallback(() => setWasTgeSimulated(true), [setWasTgeSimulated]);
    const resetTgeSimulation = useCallback(() => setWasTgeSimulated(false), [setWasTgeSimulated]);
    return { wasTgeSimulated, simulateTge, resetTgeSimulation };
};

export default useTgeSimulation;
