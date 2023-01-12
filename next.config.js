const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: ['./styles', './components'],
        prependData: `@import "@design-system/design-system-utils.scss";`,
    },
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
};

module.exports = nextConfig;
