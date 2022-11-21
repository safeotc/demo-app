import { useCallback, useState } from 'react';
import welcomeRepository from '../../repositories/WelcomeRepository';

const useWelcomeScreen = () => {
    const [wasWelcomeScreenDisplayed, updateWasWelcomeScreenDisplayed] = useState(
        welcomeRepository.wasWelcomeDisplayed()
    );

    const setWasWelcomeScreenDisplayed = useCallback(
        (wasWelcomeScreenDisplayed: boolean) => {
            updateWasWelcomeScreenDisplayed(wasWelcomeScreenDisplayed);
            welcomeRepository.setWasWelcomeDisplayed(wasWelcomeScreenDisplayed);
        },
        [updateWasWelcomeScreenDisplayed]
    );

    return { wasWelcomeScreenDisplayed, setWasWelcomeScreenDisplayed };
};

export default useWelcomeScreen;
