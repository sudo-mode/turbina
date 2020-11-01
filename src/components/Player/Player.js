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
        <PlayerSelector isOpen={true}/>
        <PlayerSwitcher isOpen={false}/>
      </div>
      
      <PlayerInfo isOpen={true} tracks={tracks}/>
    </section>

  )
}

export default Player;
