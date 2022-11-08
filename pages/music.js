import styles from '../styles/Music.module.scss'

const Music = () => {
    return (
      <section className={styles.container}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Hr_oAeCzWMo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ACMOm9fnErY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
      )
  }
  
  export default Music