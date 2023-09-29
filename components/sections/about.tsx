import {
    Badge,
    Body,
    Box,
    Container,
    Flex,
    Heading,
    Label,
} from '@illuzionz-studios/design-system';
import React, { PropsWithChildren } from 'react';
import styles from './about.module.scss';
import skills from '@content/skills.json';
import styled from 'styled-components';

type AboutCardProps = {
    title: string;
};

const AboutCard: React.FC<PropsWithChildren<AboutCardProps>> = ({
    children,
    title,
}) => (
    <Flex
        borderSize="1px"
        borderColor="neutral200"
        padding={5}
        radius="lg"
        direction="column"
        gap={2}
        className={styles.aboutCard}
    >
        <Heading element="p" variant="heading-3">
            {title}
        </Heading>
        {children}
    </Flex>
);

export const About: React.FC = () => (
    <Container id="about">
        <Box paddingTop={11} paddingBottom={10}>
            <Box className={styles.projectTitle}>
                <Heading element="h2" variant="heading-1" color="black">
                    About
                </Heading>
                <Label variant="xl" color="gray800">
                    Find out a bit more about me and what I do
                </Label>
            </Box>

            <Flex direction="row" marginTop={7} gap={7} wrap="wrap">
                <AboutCard title="Who Am I">
                    <Body variant="md">
                        Hi, I&apos;m Jamin Stratford. I&apos;m a full-stack
                        software engineer with a passion for building engaging
                        and scalable innovative projects. I&apos;ve been in the
                        industry for many years and have developed numerous
                        technical skills allowing me to turn my endless creative
                        ideas into reality.
                    </Body>
                </AboutCard>

                <AboutCard title="What I Do">
                    <Body variant="md">
                        My current interest lies in building full fledged
                        applications with fully functioning backends and
                        frontends. I enjoy the process of turning an idea into a
                        tangible product and am always striving to improve my
                        skills and stay up-to-date with the latest software
                        engineering trends.
                    </Body>
                </AboutCard>

                <AboutCard title="Interests">
                    <Body variant="md">
                        While my main passion is programming and building cool
                        things! Some of my other interests include photography
                        and music. Photography for me is another creative outlet
                        to capture special moments and share them in various
                        other forms. Music being another creative outlet,
                        whether its creating small beats or just consuming the
                        wide variety of music on the internet.
                    </Body>
                </AboutCard>

                <AboutCard title="Skills">
                    <Flex wrap="wrap" gap={2}>
                        {skills.skills.map((skill, index) => {
                            return (
                                <Box
                                    key={index}
                                    borderColor="neutral200"
                                    radius="sm"
                                    paddingLeft={3}
                                    paddingRight={3}
                                    paddingTop={1}
                                    paddingBottom={1}
                                    as="span"
                                >
                                    <Body variant="sm">{skill}</Body>
                                </Box>
                            );
                        })}
                    </Flex>
                </AboutCard>
            </Flex>
        </Box>
    </Container>
);
