import Head from 'next/head'
import Nav from '../components/Nav'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Masaki Kleinkopf </title>
        <meta name="title-description" content="Masaki Kleinkopf portfolio site" />
      </Head>
      <Nav/>
      <div>
        hello
      </div>
    </main>
  )
}
