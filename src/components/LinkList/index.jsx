import { useEffect, useState, createRef } from "react"

// Lord Icon
import { Player } from '@lordicon/react';
import LINK from '../../lottie/link.json'
import SHARE from '../../lottie/share.json'

// Components
import Loading from "../Loading";
import Message from '../Message';
import { useNavigate } from "react-router-dom";

const LinkList = ({ data, editable=false }) => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [link, setLink] = useState("")
  const refs = []
  const refs2 = []

  useEffect(() => {[refs], [refs2]})

  // Play icons on mouseenter
  const playIcons = (e, refId, ref2Id) => {
    e.preventDefault()

    // Ref Link Icon
    if (refId) {
      refs.map(ref => {
        refId.current?.playFromBeginning()
      })
    }

    // Ref Share Icon
    if (ref2Id) {
      refs2.map(ref => {
        ref2Id.current?.playFromBeginning()
      })
    }
  }

  // Capitalize icon title
  const capitalizeText = (text) => {
    if (!text)
      return

    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  // Copy Link
  const copyLink = (e, link) => {
    e.preventDefault()
    navigator.clipboard.writeText(link)
    setLink(link)
    activeMessage(true)
  }

  const activeMessage = (active) => {
    setShow(active)
  }

  const MessageBody = () => {
    return (
      <>
        <p>Copiado para área de tranferência!</p>
        <p>{link}</p>
        <p>Agora é só compartilhar 😁</p>
      </>
    )
  }

  const handleEdit = (id) => {
    console.log(id)
    navigate(`/edit/${id}`)
  }

  return (
    <>
      <Message activeMessage={activeMessage} show={show} timeOut={3000}>
        <MessageBody />
      </Message>
      <div>
        <h1 className="text-2xl text-center bg-purple-500 text-slate-50 p-[8px] rounded-lg shadow-lg">
          {editable ? 'Editar Links' : 'Lista de Links'}
        </h1>
      </div>
      <ul className="w-full sm:p-[30px] p-[25px]">
        {
          data !== undefined ? 
            data.map((link, index) => {

              // Lord Icon refs
              refs.push(createRef())
              refs2.push(createRef())

              return (
                <div key={link.id}>
                  <li className="my-4 text-slate-50 w-full border-none p-4 border rounded-lg shadow-md hover:opacity-[.9] hover:cursor-pointer hover:scale-[1.02] transition-all duration-[.5s]" style={{ backgroundColor: link.color }}>
                    <div className={`flex items-center justify-between ${link.title === 'github' ? 'gap-8' : 'gap-4'}`}>
                      {/* Links */}
                      <div className="flex items-center justify-center w-full">
                        {/* Link Title */}
                        <span className="flex items-center justify-center w-full gap-1">
                          <i className={`${link.icon} colored text-2xl`}></i>
                          <h2 className="text-2xl">{capitalizeText(link.title)}</h2>
                        </span>
                        {/* Link Icon */}
                        <a
                          title="Copiar link"
                          className="cursor-pointer"
                          onMouseEnter={
                            (e) => {playIcons(e, false, refs2[index])}
                          }
                          onClick={
                            (e) => {copyLink(e, link.url)}
                          }
                        >
                          <Player
                            id={link.id}
                            size={32}
                            icon={LINK}
                            ref={refs2[index]}
                          />
                        </a>

                        {/* Share Icon */}
                        <a
                          title={"Ir para " + link.title}
                          href={link.url}
                          target="_blank"
                          className="cursor-pointer"
                          onMouseEnter={
                            (e) => {playIcons(e, refs[index], false)}
                          }>
                            <Player
                              id={link.id}
                              size={32}
                              icon={SHARE}
                              ref={refs[index]}
                            />
                        </a>
                      </div>
                      { editable && (
                        <div className="text-end">
                          <a
                            onClick={() => handleEdit(link.id)}
                            className="cursor-pointer"
                          >
                            <i className="fa fa-edit" style={{ fontSize: '28px' }}></i>
                          </a>
                        </div>
                      )}
                    </div>
                  </li>
                </div>
              )
            }) : <>
              <Loading />
            </>
          }
      </ul>
    </>
  )
}

export default LinkList