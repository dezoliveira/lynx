import { useNavigate } from "react-router-dom"

export default function NavigateButton({ link='/', text }) {
  const navigate = useNavigate()
  
  return (
    <div
      className="flex items-center gap-[5px] text-slate-50 absolute top-[20px] left-[20px] hover:cursor-pointer hover:opacity-[.9] z-10"
      onClick={() => navigate(`${link}`)}
    >
      <i className="fa-solid fa-arrow-left"></i>
      {text}
    </div>
  )
}