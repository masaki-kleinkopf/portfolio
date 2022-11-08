import Head from 'next/head'
import Nav from '../components/Nav'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <main className={styles.app}>
      <Head>
        <title>Masaki Kleinkopf </title>
        <meta name="title-description" content="Masaki Kleinkopf portfolio site" />
      </Head>
      <div className={styles.information}>
        <h3>
          Hi, I&apos;m Masaki, I&apos;m a front-end developer.<br /><br/>
          I recently completed a rigorous 7 month, 60 hour per week program studying frontend development at the Turing School of Software and Design.
          I enjoy the constant learning opportunities in programming, and am passionate about increasing diversity and social-impact in tech.
          I previously had a career in music, in which I performed on trombone professionally and maintained a brass teaching studio. 
          I have performed at many venues in Colorado, Oregon and Los Angeles and received my Masters in music at the University of Oregon in 2021. 
          I hope to bring the work ethic and creativity I cultivated in my music practice to my new career in tech.<br/><br />
          Check out some of my recent software projects or listen to some music!
        </h3>
      </div>
    </main>
  )
}
