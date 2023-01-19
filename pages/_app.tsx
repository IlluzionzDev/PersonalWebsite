// Import SCSS utils
import '@design-system/design-system.scss';
import type { AppProps } from 'next/app';

// Font stlying
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { ThemeProvider } from '@illuzionz-studios/design-system';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        // Set var(--vh) to actual view height of viewport
        const setHeight = () => {
            document.documentElement.style.setProperty(
                '--vh',
                window.innerHeight + 'px'
            );
        };

        // Update viewport on resize
        window.addEventListener('resize', setHeight);
        setHeight();
    }, []);

    return (
        <ThemeProvider>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-4F1C1X6RJG"
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-4F1C1X6RJG', {
                            page_path: window.location.pathname,
                            });
                            `,
                }}
            />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
