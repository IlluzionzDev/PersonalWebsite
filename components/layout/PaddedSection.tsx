import styles from "./PaddedSection.module.scss";

const PaddedSection: React.FC = ({ children }) => (
  <section className={`container ${styles.section}`}>
    {children}
  </section>
);

export default PaddedSection;
