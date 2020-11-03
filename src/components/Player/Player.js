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
  const [isTextInfo, setTextInfo] = useState(false);

  const handleExtendClick = () => {
    setPlayerState(!isPlayerExtend);
  }

  const handleTrackClick = (track) => {
    console.log('curren track: ', track)
    setCurrentTrack(track)
  }

  const handlePlayerSwitcherClick = () => {
    console.log('handlePlayerSwitcherClick isTextInfo: ', isTextInfo)
    setTextInfo(!isTextInfo)
  }
  
  return (
    <section className="player">
      <PlayerController
        track={currentTrack}
      />
      {isPlayerExtend && <PlayerSwitcher
        onClick={handlePlayerSwitcherClick}
        isTextInfo={isTextInfo}
      />}
      <PlayerExtendBtn
        isOpen={isPlayerExtend}
        onClick={handleExtendClick}
      />
      <PlayerInfo
        isOpen={isPlayerExtend}
        onTrackClick={handleTrackClick}
        tracks={tracks}
        isTextInfo={isTextInfo}
        currentTrack={currentTrack}
      />
    </section>
  )
}

export default Player;
