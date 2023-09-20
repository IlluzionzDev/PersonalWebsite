import {
    Body,
    Box,
    Flex,
    Heading,
    Label,
    useTheme,
} from '@illuzionz-studios/design-system';
import Link from 'next/link';
import { FaFolder, FaGithub } from 'react-icons/fa';
import styles from './project-card.module.scss';

type ProjectCardProps = {
    index: number;
    project: {
        name: string;
        description: string;
        skills: Array<string>;
        link: string;
        source: string;
        featured: boolean;
    };
};

const ProjectCard: React.FC<ProjectCardProps> = ({ index, project }) => {
    const { theme } = useTheme();

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
            className={styles.projectCard}
        >
            <Flex direction="row" justifyContent="space-between">
                <Box>
                    <FaFolder size={32} />
                </Box>
                <Flex direction="row" alignItems="center" gap={3}>
                    <Link
                        href={project.source}
                        target="_blank"
                        aria-label="Github Source Code"
                        passHref
                    >
                        <Box className={styles.github}>
                            <FaGithub size={24} />
                        </Box>
                    </Link>
                </Flex>
            </Flex>
            <Flex direction="column" gap={1}>
                <Heading
                    element="h4"
                    variant="heading-4"
                    color="neutral900"
                    className={styles.projectCard__title}
                >
                    <Link href={project.link} target="_blank">
                        {project.name}
                    </Link>
                </Heading>
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
                        <Label key={index} variant="md" color="primary600">
                            {skill}
                        </Label>
                    );
                })}
            </Flex>
        </Flex>
    );
};

export default ProjectCard;
