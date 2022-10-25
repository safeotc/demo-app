interface IWelcomeRepository {
    wasWelcomeDisplayed: () => boolean;
    setWasWelcomeDisplayed: (wasDisplayed: boolean) => void;
}

class WelcomeRepository implements IWelcomeRepository {
    private LOCAL_STORAGE_KEY = 'SafeOtcDemo:WasWelcomeDisplayed';

    wasWelcomeDisplayed = () => JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY) || 'false');

    setWasWelcomeDisplayed = (wasDisplayed: boolean) => {
        localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(wasDisplayed));
    };
}

export default new WelcomeRepository();
