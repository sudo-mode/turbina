import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Player.css';
import PlayerController from './PlayerController';
import PlayerSwitcher from './PlayerSwitcher';
import ExtendBtn from './ExtendBtn';
import PlayerInfoContainer from './PlayerInfoContainer';
import VideoBtn from './VideoBtn';
import PlayerCover from './PlayerCover';
import tracks from '../../db/tracks';

function Player ({ isPlayerExtend, onPlayerExtend, style, currentTrack, onSetCurrentTrack, setIsPlaying, setBorder}) {
  const [isTextInfo, setTextInfo] = useState(false);
  const [isExtendElementsMounted, setIsExtendElementsMounted] = useState(false);

  const extendPlayerAnimationConfig = useSpring({
    from: { opacity: .1, scale: 0.8 },
    to: { opacity: isPlayerExtend ? 1 : 0.1, scale: isPlayerExtend ? 1 : 0.8 },
    config: { duration: 250 },
    onRest: () => {
      if (!isPlayerExtend) {
        setIsExtendElementsMounted(false)
      }
    } 
  });

  const handleExtendClick = () => {
    onPlayerExtend();
    setIsExtendElementsMounted(true);
  }

  const handleTrackClick = (track) => {
    onSetCurrentTrack(track);
  }

  const handlePlayerSwitcherClick = () => {
    setTextInfo(!isTextInfo);
  }

  const AnimatedPlayerCover = animated(PlayerCover);
  
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
        setIsPlaying={setIsPlaying}
        setBorder={setBorder}
        isPlayerExtend={isPlayerExtend}
        track={currentTrack}
      />
      <ExtendBtn
        isOpen={isPlayerExtend}
        onBtnClick={handleExtendClick}
      />
      {isPlayerExtend && 
        <PlayerInfoContainer
        isOpen={isPlayerExtend}
        onTrackClick={handleTrackClick}
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
