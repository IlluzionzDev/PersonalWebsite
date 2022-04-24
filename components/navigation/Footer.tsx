import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <p className="small-text text-gradient primary-gradient-200">
        Designed and Developed by Jamin Stratford
      </p>
    </section>
  );
};

export default Footer;
