import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './Player.css';
import PlayerController from './PlayerController';
import PlayerSwitcher from './PlayerSwitcher';
import ExtendBtn from './ExtendBtn';
import PlayerInfoContainer from './PlayerInfoContainer';
import VideoBtn from './VideoBtn';
import PlayerCover from './PlayerCover';
import tracks from '../../db/tracks';

function Player ({ isPlayerExtend, onPlayerExtend, style, currentTrack, onSetCurrentTrack }) {
  const [isTextInfo, setTextInfo] = useState(false);
  const [isExtendElementsMounted, setIsExtendElementsMounted] = useState(false);

  const extendPlayerAnimationConfig = useSpring({
    from: { opacity: .1, scale: 0.8 },
    to: { opacity: isPlayerExtend ? 1 : 0.1, scale: isPlayerExtend ? 1 : 0.8 },
    config: { duration: 250 },
    onRest: () => {
      if (!isPlayerExtend) {
        setIsExtendElementsMounted(false);
      }
    } 
  });

  const handleExtendClick = () => {
    onPlayerExtend();
    setIsExtendElementsMounted(true);
  }

  const [currentTrackIndex, setCurrentTrackIndex] = useState(tracks.indexOf(currentTrack));

  useEffect(() => {
    setCurrentTrackIndex(tracks.indexOf(currentTrack));
  }, [currentTrack]);

  const handleForwardClick = () => {
    if (currentTrackIndex < tracks.length - 1) {
      onSetCurrentTrack(tracks[currentTrackIndex + 1]);
    } else if (currentTrackIndex === tracks.length - 1) {
      onSetCurrentTrack(tracks[0]);
    }
  }

  const handleBackwardClick = () => {
    if (currentTrackIndex === 0) {
      onSetCurrentTrack(tracks[tracks.length - 1]);
    } else if (currentTrackIndex > 0) {
      onSetCurrentTrack(tracks[currentTrackIndex - 1]);
    }
  }

  const handleTrackEnd = () => {
    if (currentTrackIndex < tracks.length - 1) {
      onSetCurrentTrack(tracks[currentTrackIndex + 1]);
    }
  }

  const handlePlayerSwitcherClick = () => {
    setTextInfo(!isTextInfo);
  }

  const AnimatedPlayerCover = animated(PlayerCover);

  /* Для десктопов: плеер выезжает через 3 секунды после загрузки страницы. 
  Рисуем компонент обложки и кнопки "Клип" и "Релизы".
  Для отключения закомментить этот useEffect */
  useEffect(() => {
    if (isPlayerExtend) {
      setIsExtendElementsMounted(true);
    }
  }, [isPlayerExtend]);
  
  return (
    <section className="player" style={style}>
      {isExtendElementsMounted && 
        <AnimatedPlayerCover
          image={currentTrack.albumPicture}
          style={extendPlayerAnimationConfig}
          trackName={currentTrack.trackName}
          author={currentTrack.author}
          originalAuthor={currentTrack.originalAuthor}
        />
      }
      <PlayerController
        isPlayerExtend={isPlayerExtend}
        track={currentTrack}
        onForwardClick={handleForwardClick}
        onBackwardClick={handleBackwardClick}
        onTrackEnd={handleTrackEnd}
      />
      <ExtendBtn
        isOpen={isPlayerExtend}
        onBtnClick={handleExtendClick}
      />
      {isPlayerExtend && 
        <PlayerInfoContainer
        isOpen={isPlayerExtend}
        onTrackClick={onSetCurrentTrack}
        tracks={tracks}
        isTextInfo={isTextInfo}
        currentTrack={currentTrack}
        />
      }
      {isExtendElementsMounted &&
        <animated.div 
          className="player__buttons-wrapper"
          style={extendPlayerAnimationConfig}
        >
          {currentTrack.videoLink &&
            <VideoBtn 
              videoLink={currentTrack.videoLink}
            /> 
          }
          <PlayerSwitcher
            onClick={handlePlayerSwitcherClick}
            isTextInfo={isTextInfo}
          />
        </animated.div>
      }
    </section>
  )
}

export default Player;
