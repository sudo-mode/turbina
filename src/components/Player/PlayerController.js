import { useRef, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './PlayerController.css';
import useAudioPlayer from '../../hooks/useAudioPlayer';
import useTicker from '../../hooks/useTicker';
import PlayerTimeline from './PlayerTimeline';
import PlayerTimer from './PlayerTimer';
import ControlBtn from './ControlBtn';
import renderFrame from '../../utils/renderFrame';
import cn from 'classnames';

window.AudioContext = window.AudioContext || window.webkitAudioContext;

function PlayerController({ isPlayerExtend, track, setIsPlaying, setBorder }) {
  const trackRef = useRef();
  const audioPlayerRef = useRef();
  const [audioCtx, setAudioCtx] = useState(null);
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
        const processor = context.createScriptProcessor(1024);
        audioSrc.connect(processor).connect(context.destination);

        audioSrc
          .connect(analyser)
          .connect(context.destination);
        analyser.connect(context.destination);
        setAudioCtx(context);
        processor.onaudioprocess = () => {
          analyser.getByteFrequencyData(freqData);
          const analysed = freqData
            .reduce((acc, i) => acc + i, 0) / freqData.length;
          const border = 100 - ((analysed / 128) * 100);
          setBorder(border);
        };
        renderFrame(analyser, ctx, freqData, analyzerCanvas);
      }
    } catch (e) {
      return
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    handleTrackEnded,
    curTime,
    duration
  } = useAudioPlayer(audioPlayerRef, track);
  
  useEffect(() => {
    setIsPlaying(isPlaying);
  }, [ isPlaying, setIsPlaying ])
  
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
          onEnded={handleTrackEnded}
        >
          <p>Ваш браузер не поддерживает HTML5 аудио.</p>
        </audio>
        <ControlBtn
          isPlaying={isPlaying}
          onBtnClick={handlePlayClick}
        />
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
            { 'player__bar_active': !isMobile && !isLandscape && isPlaying },
            { 'player__bar_active-and-theme': track.theme.backgroundImage.includes('gradient') })}
          ref={analyzerCanvas}
          id="analyzer">
        </canvas>
      </div>
    </>
  )
}

export default PlayerController;
