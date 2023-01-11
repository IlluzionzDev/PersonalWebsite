import styles from './projects.module.scss';
import { Box } from '@design-system/layout/box';
import skills from '@content/skills';
import { Badge } from '@design-system/badge';
import { Button } from '@design-system/button';
import { MainNav } from '@components/navigation';
import { SectionHeader } from '@components/section';
import { Container } from '@design-system/layout/container';
import { Flex } from '@design-system/layout/flex';
import { CenterSection, FullSection } from '@design-system/layout/section';
import { Heading } from '@design-system/typography';
import { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import ProjectCard from '@components/project/project-card';
import projects from '@content/projects.json';

const Projects: NextPage = () => {
    return (
        <>
            <Head>
                <title>Jamin Stratford | Projects I Have Built</title>
                <meta
                    name="description"
                    content="Jamin Stratford is a Full-Stack software developer specialising in Back-End development."
                ></meta>
                <link
                    rel="canonical"
                    href="https://jaminstratford.com/projects"
                />
            </Head>
            <div className={styles.pageBg}></div>
            <MainNav />
            <CenterSection>
                <Container>
                    <SectionHeader
                        color="primary"
                        title="Projects"
                        heading="Some Things I've Built"
                        subHeading="Discover all the things I pour my heart and soul into"
                    />
                </Container>
            </CenterSection>
            <Container>
                <Flex direction="row" gap={7} wrap="wrap" marginBottom={10}>
                    {projects.projects.map((project, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                index={index}
                                project={project}
                            />
                        );
                    })}
                </Flex>
            </Container>
        </>
    );
};

export default Projects;
