import ProjectCard from '@components/project/project-card';
import {
    Box,
    Container,
    Flex,
    Heading,
    Label,
    TextButton,
} from '@illuzionz-studios/design-system';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import projects from '@content/projects.json';
import styles from './featured-projects.module.scss';

export const FeaturedProjects: React.FC = () => (
    <Container>
        <Box paddingTop={10} paddingBottom={10}>
            <Box className={styles.projectTitle}>
                <Heading element="h2" variant="heading-1" color="black">
                    Featured Projects
                </Heading>
                <Label variant="xl" color="gray800">
                    Take a look at some of my favourite projects I&apos;ve
                    created
                </Label>
            </Box>

            <Flex direction="column" gap={7}>
                <Flex direction="row" marginTop={10} gap={7} wrap="wrap">
                    {projects.projects
                        .filter((project) => project.featured)
                        .map((project, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    index={index}
                                    project={project}
                                />
                            );
                        })}
                </Flex>
                <Flex justifyContent="space-between" direction="row">
                    <div></div>
                    <Link href="/projects" passHref>
                        <TextButton endIcon={<FaArrowRight size={16} />}>
                            View More
                        </TextButton>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    </Container>
);
