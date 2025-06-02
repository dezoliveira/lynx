import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex flex-col h-full mt-[50px]">
      <header className="flex text-slate-50 bg-slate-900 rounded-lg p-4">
        <nav className="gap-[15px] flex">
          <Link to="/" className="hover:opacity-[.9] hover:text-amber-400 hover:scale-[1.03] transition-all duration-[.2s]">Home</Link>|
          <Link to="/admin/edit" className="hover:opacity-[.9] hover:text-amber-400 hover:scale-[1.03] transition-all duration-[.2s]">Editar Links</Link>|
          <Link className="hover:opacity-[.9] hover:text-amber-400 hover:scale-[1.03] transition-all duration-[.2s]"> Logout</Link>
        </nav>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  )
}