import './App.css';
import { FC, useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import ICON from './lottie/link.json'

function App() {
  const playerRef = useRef(null);

  useEffect(() => {
    playIcons()
  }, [null]);

  const playIcons = () => {
    playerRef.current.playFromBeginning();
  }

  return (
    <div className="App">
      <div>
        <span>Linkedin</span>
        <a onMouseEnter={playIcons}>
          <Player ref={playerRef} size={36} icon={ICON} />
        </a>
      </div>
    </div>
  );
}

export default App;
