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
                    content="I'm a Full-Stack Software Engineer. I love working on new innovative projects and optimising them for flawless design and functionality"
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
                            heading="Jamin Stratford"
                            subHeading="Get to know a bit about my backstory and what I'm up to"
                        />
                    </Container>
                </CenterSection>

                <Container>
                    <Flex direction="column" gap={11} marginBottom={11}>
                        <Flex direction="column" gap={5}>
                            <Heading
                                element="h3"
                                variant="heading-2"
                                color="secondary900"
                            >
                                Background
                            </Heading>
                            <Flex
                                direction="column"
                                className={styles.backgroundInfo}
                                gap={4}
                                color="neutral800"
                            >
                                <Body variant="xl">
                                    Hi, I&apos;m <span>Jamin Stratford </span>.
                                    I&apos;m a
                                    <span> full-stack software engineer </span>
                                    with a passion for building
                                    <span> engaging </span>and
                                    <span> scalable innovative </span>projects.
                                </Body>
                                <Body variant="xl">
                                    I&apos;ve been in the industry for many
                                    years and have developed numerous technical
                                    skills allowing me to turn my endless
                                    <span> creative ideas into reality</span>.
                                </Body>
                                <Body variant="xl">
                                    I enjoy the process of
                                    <span> turning an idea </span>into a
                                    <span> tangible product </span> and am
                                    always striving to improve my skills and
                                    stay up-to-date with the latest software
                                    engineering trends.
                                </Body>
                            </Flex>
                        </Flex>

                        <Flex direction="column" gap={5}>
                            <Heading
                                element="h3"
                                variant="heading-2"
                                color="secondary900"
                            >
                                Skills
                            </Heading>
                            <Flex
                                direction="column"
                                className={styles.backgroundInfo}
                                gap={4}
                                color="neutral800"
                            >
                                <Body variant="xl">
                                    Over the years I have been exposed to many
                                    technologies and had the chance to play
                                    around with them and build cool stuff. Here
                                    are some of my favourites that I use today.
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
                        </Flex>
                    </Flex>
                </Container>
            </PageWrapper>
            <Footer />
        </>
    );
};

export default About;
