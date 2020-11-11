
import './Main.css';
import Header from './Header';
import ProjectLogo from './ProjectLogo';
import Player from './Player/Player';


function Main({ onPlayerExtend, isPlayerExtend, isMobile }) {

  return (
    <section className="main">
      <Header
        isPlayerExtend={isPlayerExtend}
        isMobile={isMobile}
      />
      <ProjectLogo
        isPlayerExtend={isPlayerExtend}
        isMobile={isMobile}
      />
      <Player
        isPlayerExtend={isPlayerExtend}
        onPlayerExtend={onPlayerExtend}
      />



    </section>
  )
}

export default Main;
