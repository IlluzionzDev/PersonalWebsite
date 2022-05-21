import styles from "./Nav.module.scss";
import Link from "next/link";

const Nav = () => {
  return (
    <header className={`${styles.header} container`}>
      <nav>
        <ul>
          <li className={styles.brand}>
            <Link href="/">
              <a>Jamin Stratford</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="link">Blog Coming Soon!</a>
            </Link>
          </li>
          {/* <li>
            <Link href="#projects">
              <a className="link">Instagram</a>
            </Link>
          </li> */}
          {/* <li>
            <Link href="/blog">
              <a className="link">Blog</a>
            </Link>
          </li> */}
          {/* <li>
            <Link href="#contact">
              <a className="link">Contact</a>
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
