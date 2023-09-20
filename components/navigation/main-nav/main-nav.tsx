/* eslint-disable @next/next/link-passhref */
import { Label, Nav, useTheme } from '@illuzionz-studios/design-system';
import Link from 'next/link';
import styles from './main-nav.module.scss';

type MainNavProps = {
    colorScheme: 'primary' | 'secondary';
};

export const MainNav: React.FC<MainNavProps> = ({ colorScheme }) => {
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
                <Link key="link-home" href="/">
                    <Label
                        variant="button"
                        color="black"
                        className={styles.link}
                    >
                        Home
                    </Label>
                </Link>,
                <Link key="link-projects" href="/projects">
                    <Label
                        variant="button"
                        color="black"
                        className={styles.link}
                    >
                        Projects
                    </Label>
                </Link>,
            ]}
        />
    );
};
