/* eslint-disable @next/next/link-passhref */
import styles from './index.module.scss';
import type { NextPage } from 'next';
import Head from 'next/head';
import { CenterSection, FullSection } from '@design-system/layout/section';
import { Container } from '@design-system/layout/container';
import { Heading, Label } from '@design-system/typography';
import Link from 'next/link';
import { Box } from '@design-system/layout/box';
import { Flex } from '@design-system/layout/flex';
import { Button, TextButton } from '@design-system/button';
import { FaArrowRight } from 'react-icons/fa';
import { MainNav } from '@components/navigation';
import projects from '@content/projects.json';
import ProjectCard from '@components/project/project-card';
import { AnimatedEffect } from '@components/effect/animated-effect';
import { useTheme } from '@design-system/theme';
import { SocialLinks } from '@components/socials/social-links';
import { motion, Variants } from 'framer-motion';
import { Footer } from '@components/navigation/footer/footer';
import { PageWrapper } from '@design-system/layout/wrapper';

const Home: NextPage = () => {
    const { theme } = useTheme();

    const loadInTop: Variants = {
        hidden: {
            opacity: 0,
            y: -100,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                type: 'ease-in',
            },
        },
    };

    const loadInBottom: Variants = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.05,
                type: 'ease-in',
            },
        },
    };

    return (
        <>
            <Head>
                <title>Jamin Stratford | Full-Stack Software Engineer</title>
                <meta
                    name="description"
                    content="Jamin Stratford is a Full-Stack software developer specialising in Back-End development. Find out what I'm up to and what I've done."
                ></meta>
                <link rel="canonical" href="https://jaminstratford.com" />
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
                                        <motion.span>Next-Gen</motion.span>
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
                                        <Link href="/about">
                                            <Button
                                                variant="primary"
                                                colorScheme="tertiary"
                                                endIcon={
                                                    <FaArrowRight size={16} />
                                                }
                                            >
                                                Find Out More
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
                <Container>
                    <Box paddingTop={10} paddingBottom={10}>
                        <Box className={styles.projectTitle}>
                            <Heading
                                element="h2"
                                variant="heading-1"
                                color="black"
                            >
                                Featured Projects
                            </Heading>
                            <Label variant="xl" color="primary800">
                                Take a look at some of my favourite projects
                                I&apos;ve created
                            </Label>
                        </Box>

                        <Flex direction="column" gap={7}>
                            <Flex
                                direction="row"
                                marginTop={10}
                                gap={7}
                                wrap="wrap"
                            >
                                {projects.projects
                                    .filter((project) => project.featured)
                                    .map((project, index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                index={index}
                                                project={project}
                                            />
                                        );
                                    })}
                            </Flex>
                            <Flex
                                justifyContent="space-between"
                                direction="row"
                            >
                                <div></div>
                                <Link href="/projects">
                                    <TextButton
                                        endIcon={<FaArrowRight size={16} />}
                                    >
                                        View More
                                    </TextButton>
                                </Link>
                            </Flex>
                        </Flex>
                    </Box>
                </Container>
            </PageWrapper>
            <Footer />
        </>
    );
};

export default Home;
