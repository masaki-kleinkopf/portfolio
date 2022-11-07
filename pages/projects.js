import Nav from '../components/Nav'
import Image from 'next/image'
import styles from '../styles/Projects.module.scss'

const Projects = () => {
    return (
      <div className={styles.container}>
        <section className={styles.information}>
          <h3>small talk</h3>
          <div className={styles.images}>
            <Image src="/smallTalk2.gif" alt="small talk screenshot 1" height="300" width="500" />
            <Image src="/smallTalk1.gif" alt="small talk screenshot 1" height="300" width="500" />
          </div>
          <p>
            Small Talk, Group (3 person team) Project<br/><br/>
            ● Learned a new technology (Vue.js) and built an app within a week; small Talk gives users random   
            facts, jokes and drinks to help an awkward party goer.<br/><br/>
            ● Built with global state management (Pinia) to streamline development and easily share state data<br/><br/>
            ● Utilized local storage to persist saves on users reload<br/><br/>
            ● Tech Stack: Vue 3 (Composition API), Pinia, CSS. Tested with Cypress.<br/><br/>
          </p>
        </section>

      </div>
      )
  }
  
  export default Projects