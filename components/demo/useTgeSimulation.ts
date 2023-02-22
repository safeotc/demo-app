import { useCallback, useState } from 'react';

const useTgeSimulation = () => {
    const [wasTgeSimulated, setWasTgeSimulated] = useState(false);
    const simulateTge = useCallback(() => setWasTgeSimulated(true), [setWasTgeSimulated]);
    return { wasTgeSimulated, simulateTge };
};

export default useTgeSimulation;
