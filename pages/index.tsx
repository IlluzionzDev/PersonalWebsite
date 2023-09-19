/* eslint-disable @next/next/link-passhref */
import { MainNav } from '@components/navigation';
import { Footer } from '@components/navigation/footer/footer';
import ProjectCard from '@components/project/project-card';
import { SocialLinks } from '@components/socials/social-links';
import {
    Box,
    Button,
    CenterSection,
    Container,
    Flex,
    FullSection,
    Heading,
    Label,
    PageWrapper,
    TextButton,
    useTheme,
} from '@illuzionz-studios/design-system';
import { motion, Variants } from 'framer-motion';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import styles from './index.module.scss';
import { FeaturedProjects } from '@components/sections/featured-projects';
import { About } from '@components/sections/about';

const AnimatedEffect = dynamic(
    () => import('@components/effect/animated-effect'),
    { ssr: false }
);

const Home: NextPage = () => {
    const { theme } = useTheme();

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
                                        <Link href="#about">
                                            <Button variant="primary">
                                                About Me
                                            </Button>
                                        </Link>
                                        <SocialLinks />
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
                <FeaturedProjects />
                <About />
            </PageWrapper>
            <Footer />
        </>
    );
};

export default Home;
