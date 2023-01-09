import styles from './project-card.module.scss';
import { Flex } from '@design-system/layout/flex';
import { Box } from '@design-system/layout/box';
import { Body, Heading, Label } from '@design-system/typography';
import { FaFolder, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

type ProjectCardProps = {
    index: number;
    project: {
        name: string;
        description: string;
        skills: Array<string>;
        link: string;
        source: string;
    };
};

const ProjectCard: React.FC<ProjectCardProps> = ({ index, project }) => {
    return (
        <Flex
            paddingLeft={7}
            paddingRight={7}
            paddingTop={4}
            paddingBottom={4}
            background="primary100"
            gap={4}
            direction="column"
            radius="lg"
            flex="auto"
        >
            <Flex direction="row" justifyContent="space-between">
                <Box>
                    <FaFolder size={32} />
                </Box>
                <Flex direction="row" alignItems="center" gap={3}>
                    <Link href={project.source} target="_blank">
                        <FaGithub size={24} />
                    </Link>
                </Flex>
            </Flex>
            <Flex direction="column" gap={1}>
                <Link href={project.link} target="_blank">
                    <Heading
                        element="h4"
                        variant="heading-4"
                        color="neutral900"
                    >
                        {project.name}
                    </Heading>
                </Link>
                <Body variant="md" color="black">
                    {project.description}
                </Body>
            </Flex>
            <Flex
                gap={3}
                direction="row"
                className={styles.projectCard__skills}
            >
                {project.skills.map((skill, index) => {
                    return (
                        <Label key={index} variant="md" color="primary500">
                            {skill}
                        </Label>
                    );
                })}
            </Flex>
        </Flex>
    );
};

export default ProjectCard;
