import './Player.css';
import '../../vendor/fonts/fonts.css';
import PlayerController from './PlayerController';
import PlayerSelector from './PlayerSelector';
import PlayerSwitcher from './PlayerSwitcher';
import tracks from '../../db/tracks';
import PlayerInfo from './PlayerInfo';

function Player () {

  // true false

  return (
    <section className="player">
      <div className="player__controllers">
        <PlayerController  isPlaying={true} />
        {/* <PlayerSelector isOpen={true}/> */}
        {/* <PlayerSwitcher isOpen={true}/> */}
      </div>
      
      <PlayerInfo isOpen={true} tracks={tracks} text={false}/>
    </section>

  )
}



export default Player;
