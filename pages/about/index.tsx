import { MainNav } from '@components/navigation';
import { SectionHeader } from '@components/section';
import { Container } from '@design-system/layout/container';
import { Flex } from '@design-system/layout/flex';
import { CenterSection } from '@design-system/layout/section';
import { Body, Heading } from '@design-system/typography';
import { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import styles from './about.module.scss';
import { Box } from '@design-system/layout/box';
import skills from '@content/skills';
import { Badge } from '@design-system/badge';
import { useTheme } from '@design-system/theme';
import { useRouter } from 'next/router';

const About: NextPage = () => {
    const { theme, toggleTheme } = useTheme();
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Jamin Stratford | About Jamin Stratford</title>
                <meta
                    name="description"
                    content="Jamin Stratford is a Full-Stack software developer specialising in Back-End development."
                ></meta>
                <link rel="canonical" href="https://jaminstratford.com/about" />
            </Head>
            <div className={styles.pageBg}></div>
            <MainNav />
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
                                I&apos;m a <span>Full-Stack developer </span>
                                specialising in
                                <span> back-end development</span>. I love
                                working on new innovative projects and
                                optimising them for flawless design and
                                functionality. I&apos;ve been in the industry
                                for many years and have developed numerous
                                technical skills allowing me to turn my endless
                                creative ideas into reality.
                            </Body>
                            <Body variant="xl">
                                Fast-forward to today, I&apos;m hacking together
                                useful and futuristic web experiences using a
                                modern JavaScript stack.
                            </Body>
                            <Body variant="xl">
                                Here are some of the
                                <span> current technologies</span> I am using:
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
                {/* <Flex
                    justifyContent="center"
                    alignItems="center"
                    marginTop={12}
                    marginBottom={10}
                    paddingTop={11}
                    paddingBottom={11}
                    radius="lg"
                    className={styles.aboutCta}
                    direction="column"
                    gap={6}
                >
                    <Heading
                        element="h3"
                        variant="heading-1"
                        color="white"
                        className={styles.aboutCta__title}
                    >
                        Get A Copy Of My Resume
                    </Heading>
                    <BaseButton
                        color="secondary900"
                        background="white"
                        whileHover={{
                            scale: 1.05,
                        }}
                        transition={{ type: 'spring', bounce: 0.6 }}
                        className={styles.aboutCta__button}
                        onClick={() => router.push('/resume.pdf')}
                    >
                        View Resume
                    </BaseButton>
                </Flex> */}
            </Container>
        </>
    );
};

export default About;
