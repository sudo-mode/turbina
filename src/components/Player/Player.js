import './Player.css';
import PlayerController from './PlayerController';
import PlayerSelector from './PlayerSelector';
import PlayerInfo from './PlayerInfo';
import PlayerSwitcher from './PlayerSwitcher';
import tracks from '../../db/tracks'

function Player () {
  return (
    <section className="player">
      <div className='player__controllers'>
        <PlayerController />
        <PlayerSwitcher />
        <PlayerSelector />
      </div>
      <PlayerInfo tracks={tracks}/>
    </section>
  )
}

export default Player;
