import Document, { Html, Head, Main, NextScript } from 'next/document';

class SafeOTCDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0e182c" />
                    <meta name="apple-mobile-web-app-title" content="SafeOTC" />
                    <meta name="application-name" content="SafeOTC" />
                    <meta name="msapplication-TileColor" content="#0e182c" />
                    <meta name="theme-color" content="#0e182c" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default SafeOTCDocument;
