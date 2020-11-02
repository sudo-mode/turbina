import { useState } from 'react';
import './Player.css';
import PlayerController from './PlayerController';
import PlayerExtendBtn from './PlayerExtendBtn';
import PlayerInfo from './PlayerInfo';
import tracks from '../../db/tracks';

function Player () {
  const [isPlayerExtend, setPlayerState] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);

  const handleTrackClick = (track) => {
    console.log('curren track: ', track)
    setCurrentTrack(track)
  }
  
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
        onTrackClick={handleTrackClick}
        tracks={tracks}
        isTextInfo={false}
        currentTrack={currentTrack}
      />
    </section>
  )
}

export default Player;
