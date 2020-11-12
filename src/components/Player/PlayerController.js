import { useRef, useEffect, useState } from 'react';
import './PlayerController.css';
import useAudioPlayer from '../../hooks/useAudioPlayer';
import PlayerTimeline from './PlayerTimeline';
import playBtn from '../../images/play-icon.svg';
import pauseBtn from '../../images/pause-icon.svg';
import PlayerTimer from './PlayerTimer';
import useTicker from '../../hooks/useTicker';
import cn from 'classnames';


function PlayerController ({ isPlayerExtend, track }) {
  const trackRef = useRef();
  const audioPlayerRef = useRef();
  const canvas1 = useRef();
  const [canvasVisual, setCanvasVisual] = useState('canvas-visual');
  
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
    handleTrackEnded,
    curTime,
    duration
  } = useAudioPlayer(audioPlayerRef, track);

  useEffect(() => { 
    setCanvasVisual(cn('canvas-visual', { 'canvas-visual_active' : isPlaying }))
  }, [isPlaying])

  return (
    <>
    <div className="player__controller">
      <audio
        src={track.link}
        preload="auto"
        ref={audioPlayerRef}
        onLoadedMetadata={handleLoadedMetaData}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleTrackEnded}
      />
      <button
        className="player__control-btn"
        type="button"
        onClick={handlePlayClick}
        style={{ backgroundImage: `url(${isPlaying ? pauseBtn : playBtn})` }}
      />
      <div className="player__song-container">
        <p 
          className="player__song"
          ref={trackRef}
        >
          {isLoaded
            ? <>{track.trackName} — {track.author}<span> feat. </span>{track.originalAuthor}</>
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
    <canvas
        ref={canvas1}
        className={canvasVisual}
        style={{
          position: 'absolute',
          width: `${100}%`,
          height: `${100}vh`,
          zIndex: -4,
          top: 0,
          left: 0,
        }}>
      </canvas>





    </>
  )
}

export default PlayerController;
