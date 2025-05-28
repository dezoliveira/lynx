import { useState } from "react";
import LinkContainer from "../../components/LinkContainer";
import Hero from "../../components/Hero";

export default function AddLink() {
  const [color, setColor] = useState("ff0000")
  const [title, setTitle] = useState("")
  const [link, setLink] = useState("")

  const handleChange = (e) => {
    setColor(e.target.value)
  }

  return (
    <LinkContainer>
    <Hero/>
      <form className="flex flex-col gap-[15px] w-[400px] pt-[50px]">
        <div>
          <h1 className="text-2xl text-center">Cadastrar Links</h1>
        </div>
        <div>
          <label>Titulo:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full py-[8px] shadow-md rounded-md" />
        </div>
        <div>
          <label>Link:</label>
          <input type="text" value={link}  onChange={(e) => setLink(e.target.value)} className="w-full py-[8px] shadow-md rounded-md"/>
        </div>
        <div>
          <label>Cor:</label>
          <input type="color" value={color} onChange={handleChange} className="w-full h-[100px] shadow-md"/>
        </div>
        <div className="text-center">
          <button className="px-[15px] py-[10px] bg-slate-950 text-slate-50 hover:opacity-[.9] shadow-md rounded-md">Cadastrar</button>
        </div>
        
      </form>
    </LinkContainer>
  )
}