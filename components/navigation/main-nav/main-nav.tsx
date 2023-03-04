/* eslint-disable @next/next/link-passhref */
import {
    cssColorShade,
    Label,
    Nav,
    useTheme,
} from '@illuzionz-studios/design-system';
import Link from 'next/link';
import styles from './main-nav.module.scss';

type MainNavProps = {
    colorScheme: 'primary' | 'secondary' | 'tertiary';
};

export const MainNav: React.FC<MainNavProps> = ({ colorScheme }) => {
    const { theme } = useTheme();

    const hoverStyles = {
        color: cssColorShade(colorScheme, 500),
    };

    return (
        <Nav
            colorScheme={colorScheme}
            logo={
                <Link href="/">
                    <Label variant="button" className={styles.logo}>
                        Jamin Stratford
                    </Label>
                </Link>
            }
            links={[
                <Link key="link-about" href="/about">
                    <Label
                        variant="button"
                        color="black"
                        whileHover={hoverStyles}
                    >
                        About
                    </Label>
                </Link>,
                <Link key="link-projects" href="/projects">
                    <Label
                        variant="button"
                        color="black"
                        whileHover={hoverStyles}
                    >
                        Projects
                    </Label>
                </Link>,
                <Link key="link-contact" href="/contact">
                    <Label
                        variant="button"
                        color="black"
                        whileHover={hoverStyles}
                    >
                        Contact
                    </Label>
                </Link>,
            ]}
        />
    );
};
