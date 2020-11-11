import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './Main.css';
import Header from './Header';
import ProjectLogo from './ProjectLogo';
import Player from './Player/Player';

function Main () {
  const [isPlayerExtend, setPlayerState] = useState(false);

  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  const onPlayerExtend = () => {
    setPlayerState(!isPlayerExtend);
  }

  return (
    <section className="main">
      <Header />
      <ProjectLogo 
        isMobile={isMobile}
        isPlayerExtend={isPlayerExtend}
      />
      <Player
        isPlayerExtend={isPlayerExtend}
        onPlayerExtend={onPlayerExtend}
      />
    </section>
  )
}

export default Main;
