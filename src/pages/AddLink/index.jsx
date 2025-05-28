import { useEffect, useState } from "react";
import LinkContainer from "../../components/LinkContainer";
import Hero from "../../components/Hero";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebaseConfig";
import Message from "../../components/Message";

export default function AddLink() {
  const [links, setLinks] = useState([])
  const [color, setColor] = useState("ff0000")
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState(null)
  const [show, setShow] = useState(false)
  const [maxLinks, setMaxLinks] = useState(false)

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const query = await getDocs(collection(db, "links"))
        const data = query.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      
        setLinks(data)

          if (data.length >= 5) {
            setMaxLinks(true)
            setShow(true)

          } else {
            setMaxLinks(false)
            setShow(false)
          }
          
      } catch (error) {
        console.error("Erro ao buscar links", error)
        setError(error)
      }
    }

    fetchLinks()
  }, [])

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
      setShow(true)

    } catch (error) {
      console.error("Erro ao adicionar link", error)
      setError("Erro ao adicionar link" + error.message)
      setShow(true)
    }

    setTitle("")
    setUrl("")
  }

  const activeMessage = (active) => {
    setShow(active)
  }

  return (
    <>
      <LinkContainer>
      <Hero/>
        <form className="flex flex-col sm:p-[0px] p-[25px] gap-[25px] w-[400px] pt-[50px]" onSubmit={handleSubmit}>
          <div>
            <h1 className="text-2xl text-center">Cadastrar Links</h1>
          </div>
          <div>
            <label>Titulo:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full py-[8px] shadow-md rounded-md p-4 focus:outline-none" />
          </div>
          <div>
            <label>Link:</label>
            <input type="text" value={url}  onChange={(e) => setUrl(e.target.value)} className="w-full py-[8px] shadow-md rounded-md p-4 focus:outline-none"/>
          </div>
          <div>
            <label>Cor:</label>
            <input type="color" value={color} onChange={handleChange} className="w-full h-[100px] shadow-md"/>
          </div>
          <div className="text-center">
            <button disabled={maxLinks} type="submit" className="px-[15px] py-[10px] bg-green-500 text-slate-50 hover:cursor-pointer hover:opacity-[.9] hover:scale-[1.02] transition-all hover:duration-[.3s] shadow-md rounded-md">Cadastrar</button>
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
          {maxLinks &&
            <Message activeMessage={activeMessage} show={show} timeOut={3000}>
              Numero máximo de links excedido
            </Message>
          }
          
        </form>
      </LinkContainer>
    </>
  )
}