import styles from './styles.module.css'

interface LinkContainerProps {
  children: React.ReactNode
}

export default function LinkContainer({ children } : LinkContainerProps) {
  return (
    <div className={styles.linkContainer}>
      <div className={styles.linkContent}>

      </div>
      { children }
    </div>
  )
}