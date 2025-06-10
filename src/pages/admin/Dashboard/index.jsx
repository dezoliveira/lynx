import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useFetchLinks } from "../../../hooks/useFetchLinks"

import styles from './styles.module.css'

export default function Dashboard() {
  const {links, loading, error, fetchLinks} = useFetchLinks()
  const [lastDate, setLastDate] = useState(null)

  useEffect(() => {
    fetchLinks()
  })

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
          <button className="bg-blue-500 text-slate-50 py-[8px] shadow-lg rounded-md px-[12px]">Ver Links</button>
        </Link>
        <Link to="/admin/add">
          <button className="bg-green-500 text-slate-50 py-[8px] shadow-lg rounded-md px-[12px]">Adicionar Links</button>
        </Link>
      </div>
    </div>
  )
}