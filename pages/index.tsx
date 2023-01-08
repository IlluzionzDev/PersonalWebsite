/* eslint-disable @next/next/link-passhref */
import styles from './index.module.scss'
import type { NextPage } from 'next'
import Head from 'next/head'
import { CenterSection, FullSection } from '@design-system/layout/section'
import { Container } from '@design-system/layout/container'
import { Heading, Label } from '@design-system/typography'
import { Nav } from '@design-system/navigation'
import Link from 'next/link'
import { Box } from '@design-system/layout/box'
import { Flex } from '@design-system/layout/flex'
import { TextButton } from '@design-system/button'
import { FaArrowRight, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MainNav } from '@components/navigation/main-nav'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Jamin Stratford | Full-Stack Software Engineer</title>
                <meta
                    name="description"
                    content="Jamin Stratford is a Full-Stack software developer specialising in Back-End development."
                ></meta>
                <link rel="canonical" href="https://jaminstratford.com" />
            </Head>
            <FullSection className={styles.gradient__bg}>
                <Container>
                    <MainNav />
                </Container>
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
                                    <span>Next-Gen</span>
                                    <br />
                                    <span className={styles.hero__highlight}>
                                        Software Engineer
                                    </span>
                                </Heading>
                            </Box>
                            <Flex direction="row" alignItems="center">
                                <Flex gap={4} alignItems="center">
                                    <Link
                                        href="https://github.com/IlluzionzDev"
                                        target="_blank"
                                    >
                                        <FaGithub />
                                    </Link>

                                    <Link
                                        href="https://www.linkedin.com/in/jaminstratford/"
                                        target="_blank"
                                    >
                                        <FaLinkedin />
                                    </Link>

                                    <Link
                                        href="https://www.instagram.com/jaminstratford/"
                                        target="_blank"
                                    >
                                        <FaInstagram />
                                    </Link>

                                    <Link href="/about">
                                        <TextButton endIcon={<FaArrowRight />}>
                                            Find Out More
                                        </TextButton>
                                    </Link>
                                </Flex>

                                <h2 className={styles.hero__splash}>
                                    <Label variant="xl" color="black">
                                        Hi, I&apos;m Jamin Stratford, a
                                        Full-Stack Software Engineer
                                    </Label>
                                </h2>
                            </Flex>
                        </Flex>
                    </Container>
                </CenterSection>
            </FullSection>
            <Container>
                <Box paddingTop={12} paddingBottom={12}>
                    <Heading element="h2" variant="heading-1" color="black">
                        Featured Projects
                    </Heading>
                    <Label variant="xl" color="primary800">
                        Take a look at some of my favourite projects I&apos;ve
                        created
                    </Label>
                </Box>
            </Container>
        </>
    )
}

export default Home
