import styles from './styles.module.css'

export default function LinkContainer({ children }) {
  return (
    <div className={styles.linkContainer}>
      <div className={styles.linkContent}>

      </div>
      { children }
    </div>
  )
}