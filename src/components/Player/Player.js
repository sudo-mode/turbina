import './Player.css';
import PlayerController from './PlayerController';
import PlayerSelector from './PlayerSelector';

function Player () {
  return (
    <section className="player"> 
      <PlayerController />
      <PlayerSelector />
    </section>
  )
}

export default Player;
