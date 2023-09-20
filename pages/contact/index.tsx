/* eslint-disable @next/next/link-passhref */
import { MainNav } from '@components/navigation';
import { Footer } from '@components/navigation/footer/footer';
import { SectionHeader } from '@components/section';
import { SocialLinks } from '@components/socials/social-links';
import {
    Button,
    CenterSection,
    Container,
    PageWrapper,
    TextAreaField,
    TextField,
    useTheme,
} from '@illuzionz-studios/design-system';
import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import styles from './contact.module.scss';

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
                <MainNav colorScheme="secondary" />
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
