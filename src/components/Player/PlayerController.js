import { useRef } from 'react';
import './PlayerController.css';
import useAudioPlayer from '../../hooks/useAudioPlayer';
import useTicker from '../../hooks/useTicker';
import PlayerTimeline from './PlayerTimeline';
import PlayerTimer from './PlayerTimer';
import ControlBtn from './ControlBtn';
import BackwardBtn from './BackwardBtn';
import ForwardBtn from './ForwardBtn';

function PlayerController({ isPlayerExtend, track, onForwardClick, onBackwardClick, onTrackEnd, trigger }) {

  const trackRef = useRef();
  const audioPlayerRef = useRef();

  useTicker({
    elementRef: trackRef,
    containerTickerAddClass: 'player__song-container_masked',
    dependences: [track, isPlayerExtend]
  });

  const {
    isPlaying,
    setPlaying,
    handlePlayClick,
    isLoaded,
    handleTimeUpdate,
    handleLoadedMetaData,
    setClickedTime,
    handleTrackEnd,
    curTime,
    duration
  } = useAudioPlayer(audioPlayerRef, track, onTrackEnd);
  
  // В функциях handleForwardClick и handleBackwardClick напрямую устанавливается 
  // isPlaying в состояние true для того, чтобы при переключении трека, когда текущий трек на паузе,
  // следующий запускался.
  const handleForwardClick = () => {
    onForwardClick();
    setPlaying(true);
  }

  const handleBackwardClick = () => {
    onBackwardClick();
    setPlaying(true);
  }

  // Изначально использовался useEffect внутри useAudioPlayer, в зависимости от трека устанавливающий
  // isPlaying в состояние true (см. состояние репозитория на момент коммита ecfc2e8), но это работало
  // везде кроме iOS.
  useEffect(() => {
    setPlaying(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

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
          <BackwardBtn onBtnClick={handleBackwardClick} />
          <ControlBtn
            isPlaying={isPlaying}
            onBtnClick={handlePlayClick}
          />
          <ForwardBtn onBtnClick={handleForwardClick} />
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
