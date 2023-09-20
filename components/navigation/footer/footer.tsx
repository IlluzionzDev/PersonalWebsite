import { SocialLinks } from '@components/socials/social-links';
import {
    Body,
    Container,
    Divider,
    Flex,
    Heading,
    Label,
} from '@illuzionz-studios/design-system';
import Link from 'next/link';
import styles from './footer.module.scss';
import styled from 'styled-components';

const HeroLink = styled(Body)`
    text-decoration: underline;
    transition: 0.1s ease-in-out;

    &:hover {
        color: var(--primary600);
    }
`;

export const Footer = () => {
    return (
        <Container>
            <Divider color="neutral100" />

            <Flex
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                gap={4}
                paddingTop={10}
                paddingBottom={7}
                className={styles.footer}
            >
                <Flex>
                    <Heading element="p" variant="heading-2">
                        Jamin Stratford
                    </Heading>
                </Flex>

                <Flex direction="column" gap={2} width="100%">
                    <Label variant="md" className={styles.footer__author}>
                        Designed & Built by Jamin Stratford
                    </Label>

                    <Flex
                        justifyContent="space-between"
                        className={styles.links}
                    >
                        <Flex direction="row" gap={4} alignItems="center">
                            <Link href="#about" passHref>
                                <HeroLink variant="sm">Home</HeroLink>
                            </Link>
                            <Link href="#about" passHref>
                                <HeroLink variant="sm">About</HeroLink>
                            </Link>
                            <Link href="/projects" passHref>
                                <HeroLink variant="sm">Projects</HeroLink>
                            </Link>
                        </Flex>

                        <Flex gap={4} className={styles.socials}>
                            <Label variant="md">jaminstratford@gmail.com</Label>
                            <SocialLinks />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    );
};
