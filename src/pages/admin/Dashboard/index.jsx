import { Link } from "react-router-dom"

export default function Dashboard() {
  console.log('dashboard')

  return (
    <div className="flex flex-col gap-[25px] h-full w-full p-[50px]">
      <h1>Bem-vindo, Admin!</h1>
      <div className="flex flex-col">
        <span>Você tem 8 links ativos.</span>
        <span>Última edição feita há 3 dias.</span>
      </div>
      <div className="flex gap-[10px] items-center justify-center my-[25px]">
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