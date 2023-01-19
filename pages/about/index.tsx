import { MainNav } from '@components/navigation';
import { Footer } from '@components/navigation/footer/footer';
import { SectionHeader } from '@components/section';
import skills from '@content/skills';
import {
    Badge,
    Body,
    Box,
    CenterSection,
    Container,
    Flex,
    Heading,
    PageWrapper,
    useTheme,
} from '@illuzionz-studios/design-system';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './about.module.scss';

const About: NextPage = () => {
    const { theme, toggleTheme } = useTheme();
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Jamin Stratford | About Jamin Stratford</title>
                <meta
                    name="description"
                    content="I'm a Full-Stack developer specialising in back-end development. I love working on new innovative projects and optimising them for flawless design and functionality"
                ></meta>
                <link
                    rel="canonical"
                    href="https://www.jaminstratford.com/about"
                />
            </Head>
            <PageWrapper>
                <div className={styles.pageBg}></div>
                <MainNav colorScheme="secondary" />
                <CenterSection>
                    <Container>
                        <SectionHeader
                            color="secondary"
                            title="About Me"
                            heading="Who is Jamin Stratford?"
                            subHeading="Get to know a bit about my backstory and what I'm up to"
                        />
                    </Container>
                </CenterSection>

                <Container>
                    <Flex direction="column" gap={2}>
                        <Heading
                            element="h3"
                            variant="heading-3"
                            color="secondary900"
                            className={styles.backgroundSection__header}
                        >
                            Background
                        </Heading>
                        <Flex
                            direction="row"
                            justifyContent="space-between"
                            className={styles.backgroundSection}
                        >
                            <Flex
                                direction="column"
                                className={styles.backgroundInfo}
                                gap={4}
                                color="neutral800"
                            >
                                <Body variant="xl">
                                    I&apos;m a{' '}
                                    <span>Full-Stack developer </span>
                                    specialising in
                                    <span> back-end development</span>. I love
                                    working on new innovative projects and
                                    optimising them for flawless design and
                                    functionality. I&apos;ve been in the
                                    industry for many years and have developed
                                    numerous technical skills allowing me to
                                    turn my endless creative ideas into reality.
                                </Body>
                                <Body variant="xl">
                                    Fast-forward to today, I&apos;m hacking
                                    together useful and futuristic web
                                    experiences using a modern JavaScript stack.
                                </Body>
                                <Body variant="xl">
                                    Here are some of the
                                    <span> current technologies</span> I am
                                    using:
                                </Body>
                                <Flex
                                    direction="row"
                                    className={styles.skillsWrapper}
                                    wrap="wrap"
                                    gap={4}
                                    marginTop={2}
                                >
                                    {skills.map((skill, index) => {
                                        return (
                                            <Badge key={index} variant="active">
                                                {skill}
                                            </Badge>
                                        );
                                    })}
                                </Flex>
                            </Flex>
                            <Flex className={styles.backgroundProfile}>
                                <Box className={styles.imageContainer}>
                                    <Image
                                        src="/jamin-stratford.webp"
                                        alt="Jamin Stratford Profile Picture"
                                        fill
                                        className={styles.image}
                                    />
                                </Box>
                            </Flex>
                        </Flex>
                    </Flex>
                </Container>
            </PageWrapper>
            <Footer />
        </>
    );
};

export default About;
