import styles from './styles.module.css'

interface ButtonProps {
  text: string
  type: 'button' | 'submit'
  status: 'success' | 'info'
  disabled: boolean
  
}

export default function Button({ text, type, status, disabled=false } : ButtonProps) {
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