import { SocialLinks } from '@components/socials/social-links';
import { Flex } from '@design-system/layout/flex';
import { Label } from '@design-system/typography';
import Link from 'next/link';
import styles from './footer.module.scss';

export const Footer = () => {
    return (
        <>
            <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
                gap={2}
                paddingTop={4}
                paddingBottom={4}
                className={styles.footer}
            >
                <SocialLinks color="primary900" />
                <Flex direction="row" gap={4} alignItems="center">
                    <Link key="footer-link-home" href="/">
                        <Label variant="button" color="primary700">
                            Home
                        </Label>
                    </Link>
                    <Link key="footer-link-about" href="/about">
                        <Label variant="button" color="primary700">
                            About
                        </Label>
                    </Link>

                    <Link key="footer-link-projects" href="/projects">
                        <Label variant="button" color="primary700">
                            Projects
                        </Label>
                    </Link>

                    <Link key="footer-link-contact" href="/contact">
                        <Label variant="button" color="primary700">
                            Contact
                        </Label>
                    </Link>

                    <Link
                        key="footer-link-resume"
                        href="/resume.pdf"
                        target="_blank"
                    >
                        <Label variant="button" color="primary700">
                            Resume
                        </Label>
                    </Link>
                </Flex>

                <Label variant="md" className={styles.footer__author}>
                    Designed & Built by Jamin Stratford
                </Label>
            </Flex>
            <div className={styles.footer__decoration}></div>
        </>
    );
};
