import styles from "./Skills.module.scss";
import PaddedSection from "components/layout/PaddedSection";
import SectionHeader from "components/section/SectionHeader";

type SkillsProps = {
  skills: Array<string>;
};

const Skills: React.FC<SkillsProps> = ({ skills }) => (
  <PaddedSection>
    <SectionHeader
      slogan="...and a touch of debugging there"
      title="Skills"
      subtitle="See what technologies I like to use"
      description="I love to learn and utilise popular and useful technologies. Take a look at some of the tools I use."
    />
    <div className={`${styles.skills}`}>
      {skills.map((skill, id) => {
        return <button key={id}>{skill}</button>;
      })}
    </div>
  </PaddedSection>
);

export default Skills;
