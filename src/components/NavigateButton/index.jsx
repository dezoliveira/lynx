import { useNavigate } from "react-router-dom"
import styles from './styles.module.css'

export default function NavigateButton({ link='/', text }) {
  const navigate = useNavigate()
  
  return (
    <div
      className={styles.navigateButton}
      onClick={() => navigate(`${link}`)}
    >
      <i className="fa-solid fa-arrow-left"></i>
      {text}
    </div>
  )
}