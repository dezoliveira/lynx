import { useState } from "react";
import LinkContainer from "../../components/LinkContainer";
import Hero from "../../components/Hero";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../lib/firebaseConfig";

export default function AddLink() {
  const [color, setColor] = useState("ff0000")
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setColor(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'links'), {
        title,
        url,
        color,
        createdAt: Date.now()
      })

      setSuccess("Link adiconado com sucesso!")

    } catch (error) {
      console.error("Erro ao adicionar link", error)
      setError("Erro ao adicionar link" + error.message)
    }

    setTitle("")
    setUrl("")
  }

  return (
    <LinkContainer>
    <Hero/>
      <form className="flex flex-col sm:p-[0px] p-[25px] gap-[25px] w-[400px] pt-[50px]" onSubmit={handleSubmit}>
        <div>
          <h1 className="text-2xl text-center">Cadastrar Links</h1>
        </div>
        <div>
          <label>Titulo:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full py-[8px] shadow-md rounded-md" />
        </div>
        <div>
          <label>Link:</label>
          <input type="text" value={url}  onChange={(e) => setUrl(e.target.value)} className="w-full py-[8px] shadow-md rounded-md"/>
        </div>
        <div>
          <label>Cor:</label>
          <input type="color" value={color} onChange={handleChange} className="w-full h-[100px] shadow-md"/>
        </div>
        <div className="text-center">
          <button type="submit" className="px-[15px] py-[10px] bg-slate-950 text-slate-50 hover:opacity-[.9] shadow-md rounded-md">Cadastrar</button>
        </div>

        {success && <p className="text-green-500">{success}</p>}
        {error && <p className="text-red-500">{error}</p>}
        
      </form>
    </LinkContainer>
  )
}