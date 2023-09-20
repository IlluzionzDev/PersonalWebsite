/* eslint-disable @next/next/link-passhref */
import { MainNav } from '@components/navigation';
import { Footer } from '@components/navigation/footer/footer';
import { SocialLinks } from '@components/socials/social-links';
import {
    Body,
    Box,
    Button,
    CenterSection,
    Container,
    Flex,
    FullSection,
    Heading,
    Label,
    PageWrapper,
    useTheme,
} from '@illuzionz-studios/design-system';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import styles from './index.module.scss';
import { FeaturedProjects } from '@components/sections/featured-projects';
import { About } from '@components/sections/about';
import styled from 'styled-components';

const AnimatedEffect = dynamic(
    () => import('@components/effect/animated-effect'),
    { ssr: false }
);

const HeroLink = styled(Body)`
    text-decoration: underline;
    transition: 0.1s ease-in-out;

    &:hover {
        color: var(--primary600);
    }
`;

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Jamin Stratford | Full-Stack Software Engineer</title>
                <meta
                    name="description"
                    content="Jamin Stratford is a Full-Stack Software Engineer. Find out what I'm up to and what I've done."
                ></meta>
                <link rel="canonical" href="https://www.jaminstratford.com" />
            </Head>
            <PageWrapper>
                <FullSection className={styles.gradient__bg}>
                    <MainNav colorScheme="primary" />
                    <CenterSection>
                        <Container>
                            <Flex
                                direction="column"
                                gap={11}
                                className={styles.hero}
                            >
                                <Box>
                                    <Heading
                                        element="h1"
                                        variant="hero"
                                        color="black"
                                    >
                                        <motion.span>
                                            Jamin Stratford,
                                        </motion.span>
                                        <br />
                                        <motion.span
                                            className={styles.hero__highlight}
                                        >
                                            Software{' '}
                                        </motion.span>
                                        <motion.span>Engineer</motion.span>
                                    </Heading>
                                </Box>
                                <Flex
                                    direction="row"
                                    alignItems="center"
                                    className={styles.subHero}
                                >
                                    <Flex
                                        gap={7}
                                        alignItems="center"
                                        className={styles.subHero__links}
                                    >
                                        <SocialLinks />

                                        <Flex direction="row" gap={4}>
                                            <Link href="#about">
                                                <HeroLink variant="md">
                                                    About Me
                                                </HeroLink>
                                            </Link>
                                            <Link href="/projects">
                                                <HeroLink variant="md">
                                                    Projects
                                                </HeroLink>
                                            </Link>
                                        </Flex>
                                    </Flex>

                                    <motion.h2 className={styles.hero__splash}>
                                        <Label variant="xl" color="black">
                                            Hi, I&apos;m Jamin Stratford, a
                                            Full-Stack Software Engineer
                                        </Label>
                                    </motion.h2>
                                </Flex>
                            </Flex>
                        </Container>
                    </CenterSection>
                    <AnimatedEffect />
                </FullSection>
                <Flex direction="column" background="white">
                    <About />
                    <FeaturedProjects />
                </Flex>
            </PageWrapper>
            <Footer />
        </>
    );
};

export default Home;
