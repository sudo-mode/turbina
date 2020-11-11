import { useState } from 'react';
import './Main.css';
import Header from './Header';
import ProjectLogo from './ProjectLogo';
import Player from './Player/Player';

function Main () {
  const [isPlayerExtend, setPlayerState] = useState(false);

  const onPlayerExtend = () => {
    setPlayerState(!isPlayerExtend);
  }

  return (
    <section className="main">
      <Header />
      <ProjectLogo />
      <Player
        isPlayerExtend={isPlayerExtend}
        onPlayerExtend={onPlayerExtend}
      />
    </section>
  )
}

export default Main;
