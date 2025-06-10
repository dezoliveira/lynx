import heroImage from '../../logo.png'
import styles from './styles.module.css'

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <img src={heroImage} className={styles.heroImage}/>
      </div>
    </div>
  )
}

export default Hero