import Head from 'next/head'
import Nav from '../components/Nav'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.app}>
      <Head>
        <title>Masaki Kleinkopf </title>
        <meta name="title-description" content="Masaki Kleinkopf portfolio site" />
      </Head>
      <h1 className={styles.header}>Masaki Kleinkopf</h1>
      <div className={styles.information}>
        <h3>
          Hi, I&apos;m Masaki, I&apos;m a front-end developer.<br /><br/>
          I recently switched careers after years in music as a professional jazz trombonist, educator and producer.<br/>
          Check out some of my recent software projects!
        </h3>
      </div>
    </main>
  )
}
