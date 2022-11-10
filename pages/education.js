import Nav from '../components/Nav'
import styles from '../styles/Education.module.scss'

const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.information}>
        <section>
        <h2>Turing School of Software and Design</h2>
        <h3>Mar -  Sep 2022</h3>
        <p>
          Accredited  Frontend Software Engineering Certificate <br/>
          Activities: TAPIDA (Turing Asian Pacific-Islander Desi Americans) student leader
        </p> 	
      </section>
      <section>
        <h2>University of Oregon</h2>
        <h3>Aug 2019 - Jun 2021</h3>
        <p>
          Master of Music (Jazz Studies)
          Graduate Employee
        </p> 	
      </section>
      <section>
        <h2>University of Colorado-Boulder</h2>
        <h3>Aug 2013 - May 2017</h3>
        <p>
          Bachelor of Music (Jazz Studies)
        </p> 	
      </section>
      </div>   
    </div> 
    )
}

export default Education