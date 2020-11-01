import './Player.css';
import PlayerController from './PlayerController';
import PlayerSelector from './PlayerSelector';
import PlayerSwitcher from './PlayerSwitcher';

function Player () {
  return (
    <section className="player">
      <div className="player__controllers">
        <PlayerController  isPlaying={false} />
        <PlayerSwitcher isOpen={false}/>
      </div>
      <PlayerSelector />
    </section>
  )
}

export default Player;
