import { useEffect, useState, createRef } from "react"

// Lord Icon
import { Player } from '@lordicon/react';
import LINK from '../../lottie/link.json'
import SHARE from '../../lottie/share.json'
import Loading from "../Loading";

const LinkList = ({data}) => {
  const [show, setShow] = useState(false)
  const [shareText, setShareText] = useState("")
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
    setShow(true)
    setShareText(link)
    setTimeout(() => {
      setShow(false)
    }, 3000)
  }

  return (
    <>
      {
        show ? <>
          <div
            className="
              fixed bottom-10 right-15
              sm:bottom-10 sm:right-10 
              bg-green-500 p-4 shadow-2xl rounded-lg 
              flex flex-col item-center gap-8"
            >
            <p className="text-slate-50 text-lg">
              Copiado para área de tranferência!<br/>
              Link: {shareText}<br/>
              Agora é só compartilhar 😁<br/>
            </p>
          </div>
        </> : ''
      }
      <ul className="sm:w-[70vh] w-[35vh] sm:p-4 p-2">
        {
          data !== undefined ? 
            data.map((link, index) => {

              // Lord Icon refs
              refs.push(createRef())
              refs2.push(createRef())

              return (
                <div key={link.id}>
                  <li className="my-4 bg-slate-50 w-full p-4 border rounded-2xl shadow-2xl">
                    <div className={`flex items-center justify-center ${link.title === 'github' ? 'gap-8' : 'gap-4'}`}>

                      {/* Link Title */}
                      <span className="flex items-center gap-1">
                        <i className={`${link.icon} colored text-2xl`}></i>
                        <h2 className="text-2xl">{capitalizeText(link.title)}</h2>
                      </span>

                      {/* Links */}
                      <div className="flex items-center">
                        {/* Link Icon */}
                        <a
                          href={link.url}
                          target="_blank"
                          className="cursor-pointer"
                          onMouseEnter={
                            (e) => {playIcons(e, refs[index], false)}
                          }>
                            <Player
                              id={link.id}
                              size={32}
                              icon={LINK}
                              ref={refs[index]}
                            />
                        </a>

                        {/* Share Icon */}
                        <a
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
                              icon={SHARE}
                              ref={refs2[index]}
                            />
                        </a>
                      </div>
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