import './App.css';
import { FC, useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import ICON from './link.json'

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
        <a onMouseEnter={playIcons}>
          <Player ref={playerRef} size={96} icon={ICON} />
        </a>
      </div>
    </div>
  );
}

export default App;
