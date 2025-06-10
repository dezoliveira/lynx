// Components
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

// Styles
import styles from './styles.module.css'

export default function AdminLayout() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link to="/">Home</Link>
          <Link to="/admin/edit">Editar</Link>
          <Link> Logout</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}