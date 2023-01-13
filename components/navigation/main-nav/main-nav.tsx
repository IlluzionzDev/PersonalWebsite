/* eslint-disable @next/next/link-passhref */
import styles from './main-nav.module.scss';
import { Nav } from '@design-system/navigation';
import { Label } from '@design-system/typography';
import Link from 'next/link';
import { Container } from '@design-system/layout/container';
import { useTheme } from '@design-system/theme';
import { Button } from '@design-system/button';

type MainNavProps = {
    colorScheme: 'primary' | 'secondary' | 'tertiary';
};

export const MainNav: React.FC<MainNavProps> = ({ colorScheme }) => {
    const { theme } = useTheme();

    const hoverStyles = {
        color: 'var(--' + colorScheme + '500)',
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
                <Link key="link-resume" href="/resume.pdf">
                    <Button variant="tertiary" colorScheme={colorScheme}>
                        Resume
                    </Button>
                </Link>,
            ]}
        />
    );
};
