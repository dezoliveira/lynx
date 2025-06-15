// Components
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

// Styles
import styles from './styles.module.css'
import useLogout from "../../hooks/useLogout";
import Message from "../Message";
import { useState } from "react";

export default function AdminLayout() {
  const navigate = useNavigate()
  const [message, setMessage] = useState()
  const [messageType, setMessageType] = useState("")
  const [show, setShow] = useState(false)
  const { logout } = useLogout()

  const handleLogout = async () => {  
    const result = await logout()

    if (result.success) {
      setMessage('Logout realizado com sucesso!')
      setMessageType('success')
      setShow(true)
      navigate('/')
    
    } else {
      setMessage('Erro ao fazer logout' + result.error)
      setMessageType('error')
      setShow(true)
    }
  }

  const activeMessage = (active) => {
    setShow(active)
  }
  
  return (
    <div className={styles.adminContainer}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link to="/admin">Home</Link>
          <Link to="/admin/edit">Editar</Link>
          <Link onClick={handleLogout}> Logout</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <Message
        activeMessage={activeMessage}
        show={show}
        timeOut={3000}
        type={messageType}
      >
        {message}
      </Message>
    </div>
  )
}