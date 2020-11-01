import { useState } from 'react';
import './Player.css';
import '../../vendor/fonts/fonts.css';
import PlayerController from './PlayerController';
import PlayerExtendBtn from './PlayerExtendBtn';
import PlayerInfo from './PlayerInfo';
import tracks from '../../db/tracks';

function Player () {
  const [isPlayerExtend, setPlayerState] = useState(true);

  return (
    <section className="player">
      <PlayerController
        isPlaying={false}
        isExtend={isPlayerExtend} 
      />
      <PlayerExtendBtn
        isOpen={isPlayerExtend}
      />
      <PlayerInfo
        isOpen={isPlayerExtend}
        tracks={tracks}
        text={false}
      />
    </section>
  )
}

export default Player;
