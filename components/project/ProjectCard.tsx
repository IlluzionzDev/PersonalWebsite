import styles from "./ProjectCard.module.scss";

type ProjectCard = {
    project: {
        name: string
    }
}
 
const ProjectCard: React.FC<ProjectCard> = ({project}) => (
  <div className={styles.project}>
      <div className={styles.left}>
          <h3>Project Alpha</h3>
        {project.name}
      </div>
      <div className={styles.right}>
        <p>Image</p>
      </div>
        
  </div>
);

export default ProjectCard;