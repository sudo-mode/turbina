import './Player.css';
import PlayerController from './PlayerController';
import PlayerSelector from './PlayerSelector';
import PlayerSwitcher from './PlayerSwitcher';
import tracks from '../../db/tracks';
import PlayerInfo from './PlayerInfo';

function Player () {
  return (
    <section className="player">
      <div className="player__controllers">
        <PlayerController  isPlaying={false} />
        <PlayerSwitcher isOpen={false}/>
      </div>
      <PlayerSelector />
      <PlayerInfo tracks={tracks}/>
    </section>

  )
}

export default Player;
