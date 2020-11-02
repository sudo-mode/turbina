import { useState } from 'react';
import './Player.css';
import PlayerController from './PlayerController';
import PlayerSwitcher from './PlayerSwitcher';
import PlayerExtendBtn from './PlayerExtendBtn';
import PlayerInfo from './PlayerInfo';
import tracks from '../../db/tracks';

function Player () {
  const [isPlayerExtend, setPlayerState] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const handleExtendClick = () => {
    setPlayerState(!isPlayerExtend);
  }

  return (
    <section className="player">
      <PlayerController
        track={currentTrack}
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
