import Nav from "./Nav"
import styles from '../styles/layout.module.scss'

export default function Layout({ children }) {
  return (
  <div className={styles.container}>
    <Nav />
    <main>{children}</main>
  </div>
  )
}