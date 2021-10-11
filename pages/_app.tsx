import '../styles/globals.scss';
import type { AppProps } from 'next/app';

function SafeOTCApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
export default SafeOTCApp;
