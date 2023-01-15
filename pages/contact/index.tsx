/* eslint-disable @next/next/link-passhref */
import styles from './contact.module.scss';
import { Box } from '@design-system/layout/box';
import { MainNav } from '@components/navigation';
import { SectionHeader } from '@components/section';
import { Container } from '@design-system/layout/container';
import { Flex } from '@design-system/layout/flex';
import { CenterSection } from '@design-system/layout/section';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { TextField } from '@design-system/field';
import { useState } from 'react';
import { TextAreaField } from '@design-system/field/text-area/text-area-field';
import { Button } from '@design-system/button';
import { useTheme } from '@design-system/theme';
import { SocialLinks } from '@components/socials/social-links';
import { PageWrapper } from '@design-system/layout/wrapper';
import { Footer } from '@components/navigation/footer/footer';

const Projects: NextPage = () => {
    const { theme, toggleTheme } = useTheme();

    // Mail list state
    const [submitted, setSubmitted] = useState(false);
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <>
            <Head>
                <title>Jamin Stratford | Get In Touch</title>
                <meta
                    name="description"
                    content="Get in touch with Jamin Stratford. I'm open to new ideas, collaborations, or general feedback on my work."
                ></meta>
                <link
                    rel="canonical"
                    href="https://www.jaminstratford.com/contact"
                />
            </Head>

            <PageWrapper>
                <div className={styles.pageBg}></div>
                <MainNav colorScheme="tertiary" />
                <CenterSection>
                    <Container>
                        <SectionHeader
                            color="primary"
                            title="Contact"
                            heading="Say Hello"
                            subHeading="Get in touch with me to empower your next project"
                        />
                    </Container>
                </CenterSection>
                <Container>
                    <CenterSection>
                        <SocialLinks />

                        <form
                            className={styles.contactForm}
                            action="https://public.herotofu.com/v1/29ec62b0-8fdf-11ed-a003-6f0b76086b1c"
                            method="post"
                            target="_blank"
                            onSubmit={(e) => {
                                if (!email.includes('@')) {
                                    e.preventDefault();
                                }

                                setSubmitted(true);
                            }}
                        >
                            <TextField
                                id="subject"
                                name="subject"
                                label="Subject"
                                value={subject}
                                onChange={(e) =>
                                    setSubject(e.currentTarget.value)
                                }
                                required
                            />
                            <TextField
                                id="email"
                                name="email"
                                label="Email"
                                value={email}
                                error={
                                    !email.includes('@') && submitted
                                        ? 'Please provide valid email'
                                        : ''
                                }
                                onChange={(e) => {
                                    setEmail(e.currentTarget.value);
                                    setSubmitted(false);
                                }}
                                required
                            />
                            <TextAreaField
                                id="message"
                                name="message"
                                label="Message"
                                value={message}
                                onChange={(e) =>
                                    setMessage(e.currentTarget.value)
                                }
                                required
                            />
                            <Button
                                type="submit"
                                variant="primary"
                                colorScheme="tertiary"
                                fullWidth
                                className={styles.contactForm__submit}
                            >
                                Submit
                            </Button>
                        </form>
                    </CenterSection>
                </Container>
            </PageWrapper>
            <Footer />
        </>
    );
};

export default Projects;
