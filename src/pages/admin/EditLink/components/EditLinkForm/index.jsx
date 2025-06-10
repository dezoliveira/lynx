// React
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

// Components
import Loading from "../../../../../components/Loading"
import Message from "../../../../../components/Message"
import NavigateButton from "../../../../../components/NavigateButton"
import { useLink } from "../../../../../hooks/useLink"
import { useUpdateLink } from "../../../../../hooks/useUpdateLink"

import styles from '../../../styles.module.css'

export default function EditLinkForm() {
  const navigate = useNavigate()

  const { id } = useParams()

  const { 
    title,
    setTitle,
    url,
    setUrl,
    icon,
    setIcon,
    color,
    setColor,
    loading: loadingLinks,
    fetchLink
  } = useLink(id)
  
  const { loading, success, error, updateLink } = useUpdateLink(id)
  const [show, setShow] = useState(false)

  useEffect(() => {
    fetchLink()
  }, [id])

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        navigate('/admin/edit')
      }, 2000);
    }

  }, [success])

  const handleChange = (e) => {
    setColor(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    await updateLink({ title, url, icon, color })
    setShow(true)
  }

  const activeMessage = (active) => {
    setShow(active)
  }

  return (
    <>
      <NavigateButton link="/admin/edit" text="Voltar"/>
      {
        !loadingLinks ? <>
          <div>
            <h1 className={styles.pageLink}>Editar Link</h1>
          </div>
          <form  className={styles.form} onSubmit={handleSubmit}>
            <div>
              <label>Titulo:</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className={styles.formInput} />
            </div>
            <div>
              <label>Link:</label>
              <input type="text" value={url}  onChange={(e) => setUrl(e.target.value)} className={styles.formInput}/>
            </div>
            <div className="flex justify-between gap-[25px]">
              <div className="w-full">
                <label>Icone:</label>
                <input type="text" value={icon}  onChange={(e) => setIcon(e.target.value)} className={styles.formInput}/>
              </div>
              <div className="w-[80px]">
                <label>Cor:</label>
                <input type="color" value={color} onChange={handleChange} className={styles.colorInput}/>
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
    </>
  )
}