import { MainNav } from '@components/navigation';
import { Footer } from '@components/navigation/footer/footer';
import ProjectCard from '@components/project/project-card';
import { SectionHeader } from '@components/section';
import projects from '@content/projects.json';
import {
    CenterSection,
    Container,
    Flex,
    PageWrapper,
} from '@illuzionz-studios/design-system';
import { NextPage } from 'next';
import Head from 'next/head';
import styles from './projects.module.scss';

const Projects: NextPage = () => {
    return (
        <>
            <Head>
                <title>Jamin Stratford | Projects</title>
                <meta
                    name="description"
                    content="See what innovative projects Jamin Stratford has created. I'm always designing and developing new stuff so this is constantly updated."
                ></meta>
                <link
                    rel="canonical"
                    href="https://www.jaminstratford.com/projects"
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
