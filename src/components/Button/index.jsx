import styles from './styles.module.css'

export default function Button({ text, type, status, disabled=false }) {
  const bgColor = status === 'success' ? 'bg-green-500' : 'bg-blue-500'

  return  (
    <div className={styles.btnContainer}>
      <button
        type={type}
        disabled={disabled}
        className={`${bgColor} ${styles.button}`}
      >
        {text}
      </button>
    </div>
  )
}