import { useRef, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';
import './PlayerController.css';
import useAudioPlayer from '../../hooks/useAudioPlayer';
import useTicker from '../../hooks/useTicker';
import PlayerTimeline from './PlayerTimeline';
import PlayerTimer from './PlayerTimer';
import ControlBtn from './ControlBtn';
import BackwardBtn from './BackwardBtn';
import renderFrame from '../../utils/renderFrame';
import ForwardBtn from './ForwardBtn';

window.AudioContext = window.AudioContext || window.webkitAudioContext;

function PlayerController({ isPlayerExtend, track, onForwardClick, onBackwardClick, onTrackEnd }) {
  const trackRef = useRef();
  const audioPlayerRef = useRef();
  const [audioCtx, setAudioCtx] = useState(null);
  const [isVisible] = useState(false);
  const analyzerCanvas = useRef();

  const isMobile = useMediaQuery({ query: '(max-width: 480px), (max-height: 600px)' });
  const isLandscape = useMediaQuery({ query: '(orientation:landscape) and (max-height: 600px)' });

  useEffect(() => {
    try {

      if (!audioPlayerRef.current.src.startsWith(window.location.href)) {
        throw new Error('AudioContext отключен',
          'текущий адрес: ', window.location.href,
          'адрес трека: ', audioPlayerRef.current.src);
      }

      if (!isMobile) {
        const context = new AudioContext();
        const audio = audioPlayerRef.current;
        const audioSrc = context.createMediaElementSource(audio);
        const analyser = context.createAnalyser();
        const canvas = analyzerCanvas.current;
        const ctx = canvas.getContext('2d');
        const freqData = new Uint8Array(analyser.frequencyBinCount);
        audioSrc
          .connect(analyser)
          .connect(context.destination);
        analyser.connect(context.destination);
        setAudioCtx(context);
        renderFrame(analyser, ctx, freqData, analyzerCanvas);
      }
    } catch (e) {
      return
    }
  }, [isMobile]);

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

  if (isPlaying && audioCtx) {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume()
    }
  }

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
      <div className='player__bar-wrapper'> 
        <canvas
          className={cn('player__bar',
            { 'player__bar_active': isVisible && !isMobile && !isLandscape && isPlaying },
            { 'player__bar_active-and-theme': track.theme.backgroundImage.includes('gradient') })}
          ref={analyzerCanvas}
          id="analyzer">
        </canvas>
      </div>
    </>
  )
}

export default PlayerController;
