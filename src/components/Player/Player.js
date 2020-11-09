import { useEffect, useState } from 'react';
import './Player.css';
import PlayerController from './PlayerController';
import PlayerSwitcher from './PlayerSwitcher';
import PlayerExtendBtn from './PlayerExtendBtn';
import PlayerInfoContainer from './PlayerInfoContainer';
import tracks from '../../db/tracks';

function Player () {
  const [isPlayerExtend, setPlayerState] = useState(true);
  const [currentTrack, setCurrentTrack] = useState({
    id: '',
    group: '',
    trackName: '',
    author: '',
    text: '',
    link: ''
  });
  const [isTextInfo, setTextInfo] = useState(false);
  const [isLoaded, setLoadedState] = useState(false);

  const handleLoading = () => {
    setCurrentTrack(tracks[0]);
    setLoadedState(true);
  }

  useEffect(() => {
    window.addEventListener('load', handleLoading);

    return () => {
      window.removeEventListener('load', handleLoading);
    }
  }, []);

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
      <PlayerController
        track={currentTrack}
        isLoaded={isLoaded}
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
      {isPlayerExtend && <PlayerSwitcher
        onClick={handlePlayerSwitcherClick}
        isTextInfo={isTextInfo}
      />}
    </section>
  )
}

export default Player;
