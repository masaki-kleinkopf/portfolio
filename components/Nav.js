import Link from 'next/link';
import { useRouter } from "next/router";
import styles from '../styles/Nav.module.scss'


const Nav = () => {
  const router = useRouter();
  return (
    <nav className={styles.container}>
      <h1>Masaki Kleinkopf |<span>| Frontend Developer</span></h1>
      <nav>
        <ul>
        <li className={router.pathname == "/" ? styles.active : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={router.pathname == "/projects" ? styles.active : ""}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={router.pathname == "/education" ? styles.active : ""}>
          <Link href="/education">Education</Link>
        </li>
        <li className={router.pathname == "/music" ? styles.active : ""}>
          <Link href="/music">Music</Link>
        </li>
        <li className={router.pathname == "/contact" ? styles.active : ""}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      </nav>
    </nav>
  )
}

export default Nav