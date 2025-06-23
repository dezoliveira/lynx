import styles from './styles.module.css'

const Loading = () => {
  return (
    <>
      <div className={styles.loadingContainer}>
        <span className="loader"></span>
      </div>
    </>
  )
}

export default Loading