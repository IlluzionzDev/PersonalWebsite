import PaddedSection from 'components/layout/PaddedSection'
import SectionHeader from 'components/section/SectionHeader'

import styles from './Projects.module.scss'
import projects from 'content/projects.json'
import ProjectCard from '@components/project/ProjectCard'

const Projects = () => (
    <div id="projects">
        <PaddedSection>
            <SectionHeader
                slogan="...a bit of code here..."
                title="Projects"
                subtitle="See what kind of innovation has been happening"
                description="I love seeing what I can create with nothing but code and imagniation. Take a look at some things I've been able to do."
            />

            <div className={`${styles.projects}`}>
                {projects.projects.map((project, id) => {
                    return (
                        <ProjectCard
                            key={id}
                            index={id + 1}
                            project={project}
                        />
                    )
                })}
            </div>
        </PaddedSection>
    </div>
)

export default Projects
