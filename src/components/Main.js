import './Main.css';
import Header from './Header';
import ProjectLogo from './ProjectLogo';
import Player from './Player/Player';

function Main () {
  return (
    <section className="main">
      <Header />
      <ProjectLogo />
      <Player />
    </section>
  )
}

export default Main;
