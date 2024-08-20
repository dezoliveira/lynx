import { useEffect, useState, useRef } from "react"

// Lord Icon
import { Player } from '@lordicon/react';
import LINK from '../../lottie/link.json'
import SHARE from '../../lottie/share.json'
import Loading from "../Loading";

const LinkList = ({data}) => {
  const playerRef = useRef(null);
  const shareRef = useRef(null);

  const playIcons = () => {
    playerRef.current.playFromBeginning();
    shareRef.current.playFromBeginning();
  }

  const capitalizeText = (text) => {
    if (!text)
      return

    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return (
    <>
      <ul className="sm:w-[70vh] w-[35vh] sm:p-4 p-2">
        {
          data !== undefined ? 
            data.map((link) => (
              <div key={link.id}>
                <li className="my-4 bg-slate-50 w-full p-4 border rounded-2xl shadow-2xl">
                  <div className={`flex items-center justify-center ${link.title === 'github' ? 'gap-8' : 'gap-4'}`}>
                    <span className="flex items-center gap-1">
                      <i className={`${link.icon} colored text-2xl`}></i>
                      <h2 className="text-2xl">{capitalizeText(link.title)}</h2>
                    </span>
                    <div className="flex items-center">
                      <a href={link.url} target="_blank" onMouseEnter={playIcons} className="cursor-pointer">
                        <Player ref={playerRef} size={32} icon={LINK}/>
                      </a>
                      <a onMouseEnter={playIcons} className="cursor-pointer">
                        <Player ref={shareRef} size={32} icon={SHARE}/>
                      </a>
                    </div>
                  </div>
                </li>
              </div>
            )) : <>
              <Loading />
            </>
          }
      </ul>
    </>
  )
}

export default LinkList