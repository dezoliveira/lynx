import { Link } from "react-router-dom";

export default function AdminLayout({children}) {
  return (
    <div>
      <header className="text-slate-50 ">
        <nav className="gap-[15px] flex flex-col">
          <Link to="/" className="hover:opacity-[.9] hover:text-amber-400 hover:scale-[1.03] transition-all duration-[.2s]">Home</Link>|
          <Link to="/admin/edit" className="hover:opacity-[.9] hover:text-amber-400 hover:scale-[1.03] transition-all duration-[.2s]">Edit</Link>|
          <Link className="hover:opacity-[.9] hover:text-amber-400 hover:scale-[1.03] transition-all duration-[.2s]"> Sair</Link>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}