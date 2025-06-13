import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useFetchLinks } from "../../../hooks/useFetchLinks"

import styles from './styles.module.css'
import Button from "../../../components/Button"

export default function Dashboard() {
  const {links, loading, error, fetchLinks} = useFetchLinks()
  const [lastDate, setLastDate] = useState(null)

  useEffect(() => {
    fetchLinks()
  }, [])

  useEffect(() => {
    const getDateInfo = () => {
      const getCreatedAt = links.map(link => link.createdAt)
      const orderedCreatedAt = getCreatedAt.sort((a, b) => a - b)
      const latest = orderedCreatedAt[orderedCreatedAt.length - 1]

      if (latest) {
        const lastDateString = new Date(latest)
        const lastDateTimeString = `${lastDateString.toLocaleDateString()} ás ${lastDateString.toLocaleTimeString()}`
        setLastDate(lastDateTimeString)
      
      } else {
        setLastDate("Nenhuma data encontrada")
      }
    }

    getDateInfo()
  }, [links])
  
  return (
    <div className={styles.dashboardContainer}>
      <h1>Bem-vindo, Admin!</h1>
      <div className={styles.dashboardContent}>
        <span>Você tem {links?.length} links ativos.</span>
        <span>Última edição feita {lastDate}.</span>
      </div>
      <div className={styles.dashboardLinks}>
        <Link to="/admin/edit">
          <Button
            text="Ver Links"
            type="button"
            status="info"
            disabled={loading}
          />
        </Link>
        <Link to="/admin/add">
          <Button
            text="Adicionar Links"
            type="button"
            status="success"
            disabled={loading}
          />
        </Link>
      </div>
    </div>
  )
}