import Link from 'next/link';
import styles from '../styles/Nav.module.scss'

const Nav = () => {
  return (
    <nav className={styles.container}>
      <h1>Masaki Kleinkopf</h1>
      <nav>
        <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/education">Education</Link>
        </li>
        <li>
          <Link href="/music">Music</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      </nav>
    </nav>
  )
}

export default Nav