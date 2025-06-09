import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex flex-col h-full">
      <header className="flex justify-center text-slate-50 bg-slate-900 rounded-lg p-4">
        <nav className="gap-[15px] flex">
          <Link to="/" className="bg-slate-950 py-[8px] px-[12px] rounded-lg hover:opacity-[.9] hover:text-amber-400 hover:scale-[1.03] transition-all duration-[.2s]">Home</Link>
          <Link to="/admin/edit" className="bg-slate-950 py-[8px] px-[12px] rounded-lg hover:opacity-[.9] hover:text-amber-400 hover:scale-[1.03] transition-all duration-[.2s]">Editar Links</Link>
          <Link className="bg-slate-950 py-[8px] px-[12px] rounded-lg hover:opacity-[.9] hover:text-amber-400 hover:scale-[1.03] transition-all duration-[.2s]"> Logout</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}