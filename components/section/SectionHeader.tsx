import styles from "./SectionHeader.module.scss";

type SectionHeaderProps = {
    slogan: string,
    title: string,
    subtitle: string,
    description: string,
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  slogan,
  title,
  subtitle,
  description,
}) => (
  <div className="container">
    <p className={`slogan sub-heading-1 primary-200 ${styles.slogan}`}>
      {slogan}
    </p>
    <h2 className={`title ${styles.title}`}>{title}</h2>
    <p className={`subtitle sub-text ${styles.subtitle}`}>{subtitle}</p>
    {description && (
      <p className={`description body-2 ${styles.description}`}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeader;
