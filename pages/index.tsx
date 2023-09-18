/* eslint-disable @next/next/link-passhref */
import { MainNav } from '@components/navigation';
import { Footer } from '@components/navigation/footer/footer';
import ProjectCard from '@components/project/project-card';
import { SocialLinks } from '@components/socials/social-links';
import projects from '@content/projects.json';
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

const AnimatedEffect = dynamic(
    () => import('@components/effect/animated-effect'),
    { ssr: false }
);

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
                                        <Link href="/about">
                                            <Button
                                                variant="primary"
                                                endIcon={
                                                    <FaArrowRight size={16} />
                                                }
                                            >
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
                    {/* <AnimatedEffect /> */}
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
                            <Label variant="xl" color="gray800">
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
