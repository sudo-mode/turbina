import { useRef, useEffect } from 'react';
import './PlayerController.css';
import useAudioPlayer from '../../hooks/useAudioPlayer';
import useTicker from '../../hooks/useTicker';
import PlayerTimeline from './PlayerTimeline';
import PlayerTimer from './PlayerTimer';
import ControlBtn from './ControlBtn';
import BackwardBtn from './BackwardBtn';
import ForwardBtn from './ForwardBtn';

function PlayerController({ isPlayerExtend, isVideoModalOpened, track, onForwardClick, onBackwardClick, onTrackEnd }) {
  const trackRef = useRef();
  const audioPlayerRef = useRef();

  useTicker({
    elementRef: trackRef,
    containerTickerAddClass: 'player__song-container_masked',
    dependences: [track, isPlayerExtend]
  });

  const {
    isPlaying,
    handlePlayClick,
    isLoaded,
    handleTimeUpdate,
    handleLoadedMetaData,
    setClickedTime,
    handleTrackEnd,
    curTime,
    duration
  } = useAudioPlayer(audioPlayerRef, track, onTrackEnd);

  /* Ставим на паузу трек в аудио-плеере, если открывается модальное окно с youtube-плеером */
  useEffect(() => {
    if (isVideoModalOpened && isPlaying) {
      handlePlayClick();
    }
  }, [isVideoModalOpened]);

  return (
    <>
      <div className="player__controller">
        <audio
          src={track.link}
          preload="auto"
          ref={audioPlayerRef}
          onLoadedMetadata={handleLoadedMetaData}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleTrackEnd}
        >
          <p>Ваш браузер не поддерживает HTML5 аудио.</p>
        </audio>
        <div className="player__controllers">
          <BackwardBtn onBtnClick={onBackwardClick} />
          <ControlBtn
            isPlaying={isPlaying}
            onBtnClick={handlePlayClick}
          />
          <ForwardBtn onBtnClick={onForwardClick} />
        </div>
        <div className="player__song-container">
          <p
            className="player__song"
            ref={trackRef}
          >
            {isLoaded
              ? <>
                {track.trackName} — {track.author}
                <span className="player__song-accent"> feat. </span>
                {track.originalAuthor}
              </>
              : 'Загрузка...'
            }
          </p>
        </div>
        {isLoaded &&
          <PlayerTimer
            duration={duration}
            curTime={curTime}
          />
        }
        <PlayerTimeline
          curTime={curTime}
          duration={duration}
          onTimeUpdate={(time) => setClickedTime(time)}
        />
      </div>
    </>
  )
}

export default PlayerController;
