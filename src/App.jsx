import './App.css';
import { FC, useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import LINK from './lottie/link.json'
import SHARE from './lottie/share.json'
import Hero from './components/Hero';

function App() {
  const playerRef = useRef(null);
  const shareRef = useRef(null);

  useEffect(() => {
    playIcons()
  }, [null]);

  const playIcons = () => {
    playerRef.current.playFromBeginning();
    shareRef.current.playFromBeginning();
  }

  return (
    <div className="App">
      <Hero />
      <div className="h-[80vh] w-[90vh] bg-fuchsia-500 flex items-center justify-center border rounded-lg border-slate-950">
        <ul className="w-[80vh] p-4">
          <li className="my-4 bg-slate-50 w-full p-4 border rounded-lg shadow-2xl">
            <div className="flex items-center justify-center">
              <span className="flex items-center gap-1">
                <i class="devicon-linkedin-plain colored"></i>
                <h2>Linkedin</h2>
              </span>
              <a onMouseEnter={playIcons} className="cursor-pointer">
                <Player ref={playerRef} size={24} icon={LINK}/>
              </a>
              <a onMouseEnter={playIcons} className="cursor-pointer">
                <Player ref={shareRef} size={24} icon={SHARE}/>
              </a>
            </div>
          </li>
          <li className="my-4 bg-slate-50 w-full p-4 border rounded-lg shadow-2xl">
            <div className="flex items-center justify-center">
              <span className="flex items-center gap-1">
                <i class="devicon-github-original colored"></i>
                <h2>Github</h2>
              </span>
              <a onMouseEnter={playIcons} className="cursor-pointer">
                <Player ref={playerRef} size={24} icon={LINK}/>
              </a>
              <a onMouseEnter={playIcons} className="cursor-pointer">
                <Player ref={shareRef} size={24} icon={SHARE}/>
              </a>
            </div>
          </li> 
          <li className="my-4 bg-slate-50 w-full p-4 border rounded-lg shadow-2xl">
            <div className="flex items-center justify-center">
              <span className="flex items-center gap-1">
                <i class="devicon-vercel-original colored"></i>
                <h2>Portfolio</h2>
              </span>
              <a onMouseEnter={playIcons} className="cursor-pointer">
                <Player ref={playerRef} size={24} icon={LINK}/>
              </a>
              <a onMouseEnter={playIcons} className="cursor-pointer">
                <Player ref={shareRef} size={24} icon={SHARE}/>
              </a>
            </div>
          </li> 
          <li className=" my-4 bg-slate-50 w-full p-4 border rounded-lg shadow-2xl">
            <div className="flex items-center justify-center">
              <span className="flex items-center gap-1">
                <i class="devicon-contao-original colored"></i>
                <h1>Contato</h1>
              </span>
              <a onMouseEnter={playIcons} className="cursor-pointer">
                <Player ref={playerRef} size={24} icon={LINK}/>
              </a>
              <a onMouseEnter={playIcons} className="cursor-pointer">
                <Player ref={shareRef} size={24} icon={SHARE}/>
              </a>
            </div>
          </li> 
        </ul>
      </div>
    </div>
  );
}

export default App;
