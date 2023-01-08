import { ReactNode } from 'react'
import styles from './nav.module.scss'

type NavProps = {
    logo: ReactNode // Main logo element
    links: ReactNode[] // All links inc dropdown links
}

export const Nav: React.FC<NavProps> = ({ logo, links }) => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.logo}>{logo}</li>
                <li className={styles.links}>
                    <ul className={styles.links__list}>
                        {links.map((link, index) => {
                            return <li key={index}>{link}</li>
                        })}
                    </ul>
                </li>
            </ul>
        </nav>
    )
}
