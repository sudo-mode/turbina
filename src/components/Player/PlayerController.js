import { useRef, useEffect, useState } from 'react';
import './PlayerController.css';
import useAudioPlayer from '../../hooks/useAudioPlayer';
import PlayerTimeline from './PlayerTimeline';
import PlayerTimer from './PlayerTimer';
import ControlBtn from './ControlBtn';
import useTicker from '../../hooks/useTicker';
window.AudioContext = window.AudioContext || window.webkitAudioContext;

function PlayerController({ isPlayerExtend, track }) {
  const trackRef = useRef();
  const audioPlayerRef = useRef();
  const [audioCtx, setAudioCtx] = useState(null);
  const barsRef = useRef();

  useEffect(() => {
    try {
      if (!audioPlayerRef.current.src.startsWith(window.location.href)) {
        throw new Error('Есть треки со сторроних сайтов, визуализация отключается')
      }
      const context = new AudioContext();
      const audio = audioPlayerRef.current;
      const audioSrc = context.createMediaElementSource(audio);
      const analyser = context.createAnalyser();
      analyser.fftSize = 128;
      audioSrc
        .connect(analyser)
        .connect(context.destination)
      analyser.connect(context.destination)
  
      setAudioCtx(context)
  
      const bufferLength = analyser.frequencyBinCount;
      const frequency_array = new Uint8Array(bufferLength);
      const bars = barsRef.current.children;
  
      function update() {
  
        let colorBars;
  
        setTimeout(() => {
          requestAnimationFrame(update);
          analyser.getByteFrequencyData(frequency_array);
  
          if (bars) {
  
            for (let i = 0; i < bars.length; i++) {
  
              colorBars = `rgb(${frequency_array[0]}, ${frequency_array[i]}, ${frequency_array[i]} )`;
              bars[i].style.height = Math.floor(frequency_array[i] / 3) + 'px';
              bars[i].style.backgroundColor = colorBars;
              bars[i].style.width = 3 + '%';
              bars[i].style.marginRight = 1 + '%';
  
            }
          }
        }, 30);
      };
      
      update();

    } catch(e) {
      console.log(e)
      console.log('текущий адрес: ', window.location.href)
      console.log('адрес трека: ', audioPlayerRef.current.src)
      return
    }
  }, []);

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
  } = useAudioPlayer(audioPlayerRef, track, audioCtx);

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
    
      <div
        className="player__bars"
      >
        <ul ref={barsRef}
          style={{
            width: `${96}%`,
            height: 100,
            justifyContent: 'center',
            listStyle: 'none',
            bacgroundColor: 'red',
            display: 'flex',
            alignItems: 'flex-end',
            margin: 0,
            padding: 0,
            WebkitMaskImage: `-webkit-linear-gradient(
            top,
            rgba(0, 0, 0, 0) 0%,
            rgba(0,0,0,1) 20%,
            rgba(0,0,0,1) 80%,
            rgba(0,0,0,0) 100%)`
          }}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  )
}

export default PlayerController;
