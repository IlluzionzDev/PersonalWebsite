import styles from './ProjectCard.module.scss'
import { motion } from 'framer-motion'
import Link from 'next/link'

type ProjectCard = {
    index: number
    project: {
        name: string
        description: string
        skills: Array<string>
        link: string
        source: string
    }
}

const ProjectCard: React.FC<ProjectCard> = ({ index, project }) => (
    <motion.div className={styles.project} whileHover={{ scale: 1.02 }}>
        <div className={styles.title}>
            <h1 className="small-text primary-300">Project #{index}</h1>
            <h1 className="sub-heading-1">{project.name}</h1>
            <div className={styles.skills}>
                {project.skills.map((skill, id) => {
                    return (
                        <p className="small-text primary-300" key={id}>
                            {skill}
                        </p>
                    )
                })}
            </div>
        </div>
        <p>{project.description}</p>
        <div className={styles.links}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="small-text white">View Project</button>
            </a>

            {project.source && (
                <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <motion.span
                        whileHover={{ translateY: -3 }}
                        className="material-icons primary-300"
                    >
                        code
                    </motion.span>
                </a>
            )}
        </div>
    </motion.div>
)

export default ProjectCard
