import styles from './Hero.module.scss'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'

const Hero = () => (
    <div className={styles.hero}>
        <div className={styles.content}>
            <div>
                <p
                    className={`small-heading-2 ${styles.smallHeading} primary-100`}
                >
                    Hi, I&apos;m Jamin Stratford
                </p>
                <h1 className="display-1">
                    <Typewriter
                        options={{
                            strings: ['Software Engineer', 'Innovator', 'Creative Mind'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <p className={`small-heading-2 ${styles.smallHeading}`}>
                    Innovative and creative indivudal with a love for learning
                </p>
            </div>
            <div className={styles.button__row}>
                <Link href="#about">
                    <button className={styles.button}>About</button>
                </Link>
                <Link href="#projects">
                    <a>
                        <button className={`${styles.button} outline`}>
                            Projects
                        </button>
                    </a>
                </Link>
            </div>
        </div>
        <div className={styles.background}>
            <div className={`${styles.shape} ${styles.shape__1}`} />
            <div className={`${styles.shape} ${styles.shape__2}`} />
            <div className={`${styles.shape} ${styles.shape__3}`} />
        </div>
    </div>
)

export default Hero
