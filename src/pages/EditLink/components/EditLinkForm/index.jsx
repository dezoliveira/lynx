import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../../../lib/firebaseConfig"
import LinkContainer from "../../../../components/LinkContainer"
import Hero from "../../../../components/Hero"
import Loading from "../../../../components/Loading"

export default function EditLinkForm() {
  const { id } = useParams()
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")
  const [icon, setIcon] = useState("")
  const [color, setColor] = useState("#f0000")
  const [loading, setLoading] = useState(true)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchLink = async () => {
      const ref = doc(db, "links", id)
      const docSnap = await getDoc(ref)

      if (docSnap.exists()) {
        const data = docSnap.data()
        setTitle(data.title || '')
        setUrl(data.url || '')
        setColor(data.color || "#00000")
        setIcon(data.icon || '')
      }

      setLoading(false)
    }

    fetchLink()
  }, [id])

  const handleChange = (e) => {
    setColor(e.target.value)
  }

  const handleSubmit = () => {

  }

  return (
    <LinkContainer>
      <Hero />
      {
        !loading ? <>
          <div>
            <h1 className="text-2xl text-center bg-purple-500 text-slate-50 p-[8px] rounded-lg shadow-lg">Editar Links</h1>
          </div>
          <form className="flex flex-col gap-[35px] p-[25px] w-[400px]" onSubmit={handleSubmit}>
            <div>
              <label>Titulo:</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full py-[8px] shadow-md rounded-md p-4 focus:outline-none" />
            </div>
            <div>
              <label>Link:</label>
              <input type="text" value={url}  onChange={(e) => setUrl(e.target.value)} className="w-full py-[8px] shadow-md rounded-md p-4 focus:outline-none"/>
            </div>
            <div className="flex justify-between gap-[25px]">
              <div className="w-full">
                <label>Icone:</label>
                <input type="text" value={icon}  onChange={(e) => setIcon(e.target.value)} className="w-full py-[8px] shadow-md rounded-md p-4 focus:outline-none"/>
              </div>
              <div className="w-[80px]">
                <label>Cor:</label>
                <input type="color" value={color} onChange={handleChange} className="h-[40px] w-full shadow-md"/>
              </div>  
            </div>
            <div className="text-center mt-4">
              <button type="submit" className="px-[15px] py-[10px] bg-green-500 text-slate-50 hover:cursor-pointer hover:opacity-[.9] hover:scale-[1.02] transition-all hover:duration-[.3s] shadow-md rounded-md">Salvar Alterações</button>
            </div>

            {success && 
              <Message activeMessage={activeMessage} show={show} timeOut={3000}>
                { success }
              </Message>
            }
            {error && 
              <Message activeMessage={activeMessage} show={show} timeOut={3000}>
                { error }
              </Message>
            }      
          </form>
        </> : <Loading />
      }
    </LinkContainer>
  )
}