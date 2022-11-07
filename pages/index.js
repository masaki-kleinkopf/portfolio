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
      <Nav/>
      <div className={styles.information}>
        <h1>Masaki Kleinkopf</h1>
        <h3>
          Hi, I&apos;m Masaki, I&apos;m a front-end developer.<br /><br/>
          I recently switched careers after years in music as a professional jazz trombonist, educator and producer.<br/>
          Check out some of my recent software projects and some of the music I&apos;ve made in the past!
        </h3>
      </div>
    </main>
  )
}
