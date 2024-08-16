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
      <div className="relative h-[80vh] sm:w-[80vh] w-[40vh] bg-amber-400 flex flex-col items-center justify-center rounded-2xl shadow-xl border-slate-950">
        <div className='h-[25%] bg-neutral-950 w-full absolute top-0 rounded-t-lg'>
        </div>
          <Hero /> 
        <ul className="sm:w-[70vh] w-[35vh] sm:p-4 p-2">
          <li className="my-4 bg-slate-50 w-full p-4 border rounded-2xl shadow-2xl">
            <div className="flex items-center justify-center">
              <span className="flex items-center gap-1">
                <i class="devicon-linkedin-plain colored text-2xl"></i>
                <h2 className="text-2xl">Linkedin</h2>
              </span>
              <a href="https://www.linkedin.com/in/dezoliveira" target="_blank" onMouseEnter={playIcons} className="cursor-pointer">
                <Player ref={playerRef} size={32} icon={LINK}/>
              </a>
              <a onMouseEnter={playIcons} className="cursor-pointer">
                <Player ref={shareRef} size={32} icon={SHARE}/>
              </a>
            </div>
          </li>
          <li className="my-4 bg-slate-50 w-full p-4 border rounded-lg shadow-2xl">
            <div className="flex items-center justify-center">
              <span className="flex items-center gap-1">
                <i class="devicon-github-original colored text-2xl"></i>
                <h2 className="text-2xl">Github</h2>
              </span>
              <a href="https://www.github.com/dezoliveira" target="_blank" onMouseEnter={playIcons} className="cursor-pointer">
                <Player ref={playerRef} size={32} icon={LINK}/>
              </a>
              <a onMouseEnter={playIcons} className="cursor-pointer">
                <Player ref={shareRef} size={32} icon={SHARE}/>
              </a>
            </div>
          </li> 
          <li className="my-4 bg-slate-50 w-full p-4 border rounded-lg shadow-2xl">
            <div className="flex items-center justify-center">
              <span className="flex items-center gap-1">
                <i class="devicon-vercel-original colored text-2xl"></i>
                <h2 className="text-2xl">Portfolio</h2>
              </span>
              <a href="https://dezoliveira.github.io/myportfolio/" target="_blank" onMouseEnter={playIcons} className="cursor-pointer">
                <Player ref={playerRef} size={32} icon={LINK}/>
              </a>
              <a onMouseEnter={playIcons} className="cursor-pointer">
                <Player ref={shareRef} size={32} icon={SHARE}/>
              </a>
            </div>
          </li> 
          <li className=" my-4 bg-slate-50 w-full p-4 border rounded-lg shadow-2xl">
            <div className="flex items-center justify-center">
              <span className="flex items-center gap-1">
                <i class="devicon-contao-original colored text-2xl"></i>
                <h1 className="text-2xl">Contato</h1>
              </span>
              <a href="https://wa.me/5519992282130" target="_blank" onMouseEnter={playIcons} className="cursor-pointer">
                <Player ref={playerRef} size={32} icon={LINK}/>
              </a>
              <a onMouseEnter={playIcons} className="cursor-pointer">
                <Player ref={shareRef} size={32} icon={SHARE}/>
              </a>
            </div>
          </li> 
        </ul>
      </div>
    </div>
  );
}

export default App;
