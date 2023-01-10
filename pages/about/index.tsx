import { MainNav } from '@components/navigation';
import { SectionHeader } from '@components/section';
import { Container } from '@design-system/layout/container';
import { Flex } from '@design-system/layout/flex';
import { CenterSection, FullSection } from '@design-system/layout/section';
import { Heading, Label } from '@design-system/typography';
import { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import styles from './about.module.scss';
import { Box } from '@design-system/layout/box';
import skills from '@content/skills';
import { Badge } from '@design-system/badge';
import { Button } from '@design-system/button';
import { useRef } from 'react';
import { useTheme } from '@design-system/theme';
import { BaseButton } from '@design-system/button/base/base-button';

const About: NextPage = () => {
    const { theme, toggleTheme } = useTheme();

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
                        variant="heading-1"
                        color="secondary900"
                    >
                        Background
                    </Heading>
                    <Flex direction="row" justifyContent="space-between">
                        <Flex
                            direction="column"
                            className={styles.backgroundInfo}
                        >
                            I’m a Full-Stack developer specialising in back-end
                            development. I love working on new innovative
                            projects and optimising them for flawless design and
                            functionality. I’ve been in the industry for many
                            years and have developed numerous technical skills
                            allowing me to turn my endless creative ideas into
                            reality.
                            <br />
                            <br />
                            Fast-forward to today, I’m hacking together useful
                            and futuristic web experiences using a modern
                            JavaScript stack.
                            <br />
                            <br />
                            Here are some of the current technologies I am
                            using:
                            <Flex
                                direction="row"
                                className={styles.skillsWrapper}
                                wrap="wrap"
                                gap={4}
                                marginTop={7}
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
                            <CenterSection>
                                <Box className={styles.imageContainer}>
                                    <Image
                                        src="/jamin-stratford.webp"
                                        alt="Profile Image"
                                        fill
                                        className={styles.image}
                                    />
                                </Box>
                            </CenterSection>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    marginTop={12}
                    marginBottom={12}
                    paddingTop={11}
                    paddingBottom={11}
                    radius="lg"
                    className={styles.aboutCta}
                    direction="column"
                    gap={6}
                >
                    <Heading element="h3" variant="heading-1" color="white">
                        Get A Copy Of My Resume
                    </Heading>

                    <BaseButton
                        color="secondary900"
                        background="secondary100"
                        whileHover={{
                            scale: 1.05,
                        }}
                        transition={{ type: 'spring', bounce: 0.6 }}
                        className={styles.aboutCta__button}
                    >
                        View Resume
                    </BaseButton>
                </Flex>
            </Container>
        </>
    );
};

export default About;
