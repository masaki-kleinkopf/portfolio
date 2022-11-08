import Nav from '../components/Nav'
import Image from 'next/image'
import styles from '../styles/Projects.module.scss'

const Projects = () => {
    return (
      <div className={styles.container}>
        <section>
          <h3>Waste Not, Want Not</h3>
          <div className={styles.images}>
          </div>
          <p>
             Group (7 person team) Project<br/><br/>
            ● Tech Stack: React, GraphQL, CSS, Cypress, Circle CI<br/><br/>
            ● Built full-stack application in collaboration with back-end team<br/><br/>
            ● Utilized GraphQL for streamlined network requests<br/><br/>
            ● Set up Circle CI to ensure stability of app throughout build<br/><br/>
          </p>
        </section>
        <section>
          <h3>small talk</h3>
          <div className={styles.images}>
            <div className={styles.imageContainer}>
              <Image src="/smallTalk2.gif" alt="small talk screenshot 1" height="300" width="500" />
            </div>
            <div className={styles.imageContainer}>
              <Image src="/smallTalk1.gif" alt="small talk screenshot 1" height="300" width="500" />
            </div>
      
            
          </div>
          <p>
            Small Talk, Group (3 person team) Project<br/><br/>
            ● Tech Stack: Vue 3 (Composition API), Pinia, CSS, Cypress<br/><br/>
            ● Developed interactive social anxiety app that retrieves data from 4 public APIs<br/><br/>
            ● Streamlined development through global state management tool Pinia to share state data <br/><br/>
            ● Utilized local storage to persist saves on users reload<br/><br/>
          </p>
        </section>
        <section>
          <h3>Sombor Shuffle </h3>
          <div className={styles.images}>
            <div className={styles.imageContainer}>
              <Image src="/sombor-shuffle.png" alt="sombor shuffle pic" height="300" width="500" />
            </div>
            <div className={styles.imageContainer}>
              <Image src="/sombor-shuffle.gif" alt="sombor shuffle gif" height="300" width="500" />
            </div>
          </div>
          <p>
             Solo Project<br/><br/>
            ● Tech Stack: React, React Router, CSS, Cypress <br/><br/>
            ● Built detailed user personas, and leveraged Figma and CSS to create mobile-friendly UI <br/><br/>
            ● Implemented React Hooks while developing sports stats app that allows user to generate and save data <br/><br/>
            ● Tested external API endpoints with Postman to streamline development <br/><br/>
          </p>
        </section>
      </div>
      )
  }
  
  export default Projects