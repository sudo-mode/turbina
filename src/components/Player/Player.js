import { useState } from 'react';
import './Player.css';
import PlayerController from './PlayerController';
import PlayerSwitcher from './PlayerSwitcher';
import PlayerExtendBtn from './PlayerExtendBtn';
import PlayerInfoContainer from './PlayerInfoContainer';
import PlayerVideo from './PlayerVideo';
import tracks from '../../db/tracks';
import PlayerCover from './PlayerCover';

function Player () {
  const [isPlayerExtend, setPlayerState] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isTextInfo, setTextInfo] = useState(false);

  const handleExtendClick = () => {
    setPlayerState(!isPlayerExtend);
  }

  const handleTrackClick = (track) => {
    setCurrentTrack(track);
  }

  const handlePlayerSwitcherClick = () => {
    setTextInfo(!isTextInfo);
  }
  
  return (
    <section className="player">
      {isPlayerExtend && 
        <PlayerCover
          image={currentTrack.image}
        />
      }
      <PlayerController
        track={currentTrack}
      />
      <PlayerExtendBtn
        isOpen={isPlayerExtend}
        onClick={handleExtendClick}
      />
      <PlayerInfoContainer
        isOpen={isPlayerExtend}
        onTrackClick={handleTrackClick}
        tracks={tracks}
        isTextInfo={isTextInfo}
        currentTrack={currentTrack}
      />
      {isPlayerExtend &&
      <>
        <PlayerVideo 
          videoLink={currentTrack.videoLink}
        />   
        <PlayerSwitcher
          onClick={handlePlayerSwitcherClick}
          isTextInfo={isTextInfo}
        />
      </>
      }
    </section>
  )
}

export default Player;
