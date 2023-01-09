// Import SCSS utils
import '@design-system/design-system.scss';
import type { AppProps } from 'next/app';

// Font stlying
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/400.css';
import { ThemeProvider } from '@design-system/theme';
import Head from 'next/head';
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
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
