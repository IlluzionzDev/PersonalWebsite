/* eslint-disable @next/next/link-passhref */
import styles from './main-nav.module.scss';
import { Nav } from "@design-system/navigation"
import { Label } from "@design-system/typography"
import Link from "next/link"

export const MainNav = () => {
    return (
        <Nav
            logo={
                <Link href="/">
                    <Label variant="button" className={styles.logo}>
                        Jamin Stratford
                    </Label>
                </Link>
            }
            links={[
                <Link key="link-about" href="/about">
                    <Label variant="button" color="black">
                        About
                    </Label>
                </Link>,
                <Link key="link-projects" href="/projects">
                    <Label variant="button" color="black">
                        Projects
                    </Label>
                </Link>,
                <Link key="link-contact" href="/contact">
                    <Label variant="button" color="black">
                        Contact
                    </Label>
                </Link>,
            ]}
        />
    )
}