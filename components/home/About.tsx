import styles from './About.module.scss'

import PaddedSection from 'components/layout/PaddedSection'
import SectionHeader from 'components/section/SectionHeader'
import Link from 'next/link'

const About = () => (
    <div id="about">
        <PaddedSection>
            <SectionHeader
                slogan="A little bit of backstory..."
                title="About Me"
                subtitle="Who am I?"
                description=''
            />
            <div className={styles.text}>
                <p className="body-1">
                    I&apos;m Jamin, a passionate developer with a drive for all
                    things creative. I love working on new innovating projects
                    and seeing what I can do with unlimited creativity!
                </p>
                <p className="body-1">
                    Apart from programming, I have a strong interest in creative
                    arts including photography and videography. You can view
                    some of my work over on Instagram where I share all sorts of
                    stuff.
                </p>
            </div>
            <div className={styles.links}>
                <Link href="https://github.com/IlluzionzDev">
                    <a>
                        <button>GitHub</button>
                    </a>
                </Link>
                <Link href="https://www.instagram.com/jaminstratford">
                    <a>
                        <button>Instagram</button>
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/in/jaminstratford/">
                    <a>
                        <button>LinkedIn</button>
                    </a>
                </Link>
            </div>
        </PaddedSection>
    </div>
)

export default About
