import styles from './projects.module.scss';
import { MainNav } from '@components/navigation';
import { SectionHeader } from '@components/section';
import { Container } from '@design-system/layout/container';
import { Flex } from '@design-system/layout/flex';
import { CenterSection, FullSection } from '@design-system/layout/section';
import { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import ProjectCard from '@components/project/project-card';
import projects from '@content/projects.json';
import { Footer } from '@components/navigation/footer/footer';
import { PageWrapper } from '@design-system/layout/wrapper';

const Projects: NextPage = () => {
    return (
        <>
            <Head>
                <title>Jamin Stratford | Projects I Have Built</title>
                <meta
                    name="description"
                    content="See what innovative projects Jamin Stratford has created. I'm always designing and developing new stuff so this is constantly updated."
                ></meta>
                <link
                    rel="canonical"
                    href="https://jaminstratford.com/projects"
                />
            </Head>
            <PageWrapper>
                <div className={styles.pageBg}></div>
                <MainNav colorScheme="primary" />
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
            </PageWrapper>
            <Footer />
        </>
    );
};

export default Projects;
