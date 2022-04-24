import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div>
          <p className={`small-heading-2 ${styles.smallHeading} primary-100`}>
            Hi, I&apos;m Jamin Stratford
          </p>
          <h1 className="display-1">Let me take you</h1>
          <h1 className="display-1">
            <span className="text-gradient primary-gradient-100">
              on a journey
            </span>
          </h1>
          <p className={`small-heading-2 ${styles.smallHeading}`}>
            with code, design, innovation
          </p>
        </div>
        <div className={styles.button__row}>
          <button className={styles.button}>About</button>
          <button className={`${styles.button} outline`}>Projects</button>
        </div>
      </div>
      <div className={styles.background}>
        <div className={`${styles.shape} ${styles.shape__1}`} />
        <div className={`${styles.shape} ${styles.shape__2}`} />
        <div className={`${styles.shape} ${styles.shape__3}`} />
      </div>
    </div>
  );
};

export default Hero;
