import { useState } from 'react';
import './Player.css';
import PlayerController from './PlayerController';
import PlayerSwitcher from './PlayerSwitcher';
import PlayerExtendBtn from './PlayerExtendBtn';
import PlayerInfo from './PlayerInfo';
import tracks from '../../db/tracks';

function Player () {
  const [isPlayerExtend, setPlayerState] = useState(true);
  const handleExtendClick = () => {
    setPlayerState(!isPlayerExtend);
  }

  return (
    <section className="player">
      <PlayerController
        link='https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3'
        isExtend={isPlayerExtend}
      />
      <PlayerSwitcher isVisible={isPlayerExtend} />
      <PlayerExtendBtn
        isOpen={isPlayerExtend}
        onClick={handleExtendClick}
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
