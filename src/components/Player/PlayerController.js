import { useRef, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './PlayerController.css';
import useAudioPlayer from '../../hooks/useAudioPlayer';
import useTicker from '../../hooks/useTicker';
import PlayerTimeline from './PlayerTimeline';
import PlayerTimer from './PlayerTimer';
import ControlBtn from './ControlBtn';

window.AudioContext = window.AudioContext || window.webkitAudioContext;

function PlayerController({ isPlayerExtend, track }) {
  const trackRef = useRef();
  const audioPlayerRef = useRef();
  const [audioCtx, setAudioCtx] = useState(null);
  const analyzerCanvas = useRef();
  const isMobile = useMediaQuery({ query: '(max-width: 480px), (max-height: 480px)' });
  const resolution = useMediaQuery({ query: '(min-resolution: .001dpcm)' });
  const ratio = useMediaQuery({ query: '(-webkit-min-device-pixel-ratio:0)' })
  const all = useMediaQuery({ query: 'all' })

    ;
  const supports = useMediaQuery({ query: '(-webkit-touch-callout: none)' })


  useEffect(() => {

    try {
      if (!audioPlayerRef.current.src.startsWith(window.location.href)) {
        throw new Error('AudioContext отключен',
          'текущий адрес: ', window.location.href,
          'адрес трека: ', audioPlayerRef.current.src)
      }
      console.log("isMobile", isMobile)
      if (!isMobile) {

        const context = new AudioContext();
        const audio = audioPlayerRef.current;
        const audioSrc = context.createMediaElementSource(audio);
        const analyser = context.createAnalyser();
        const canvas = analyzerCanvas.current;
        const ctx = canvas.getContext('2d');
        const freqData = new Uint8Array(analyser.frequencyBinCount)
        // analyser.fftSize = 32;
        audioSrc
          .connect(analyser)
          .connect(context.destination)
        analyser.connect(context.destination)

        setAudioCtx(context)

        function renderFrame(isShortMobile) {
          // console.log('renderFrame')
          if (isShortMobile === true) {
            // console.log('renderFrame isShortMobile stop')
            cancelAnimationFrame(renderFrame)
            return
          } else {
            requestAnimationFrame(renderFrame)
            analyser.getByteFrequencyData(freqData)
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            // console.log(freqData)

            const rgb1 = `rgb(${freqData[20]},${freqData[40]},${freqData[80]})`;
            const rgb2 = `rgb(${freqData[30]},${freqData[50]},${freqData[70]})`;
            // const rgb1 = `red`;
            // const rgb2 = `blue`;
            
            var my_gradient=ctx.createLinearGradient(0,0,0,freqData[0]);
            my_gradient.addColorStop(0, rgb1);
            my_gradient.addColorStop(1, rgb2);


            

            // const fillStyle = `linear-gradient(to top left, ${rgb1} 0%, ${rgb2} 100%)`;
            // console.log(fillStyle)
            // ctx.fillStyle = '#a39595';
            ctx.fillStyle = my_gradient;
            

            let bars = 100;
            for (var i = 0; i < bars; i++) {
              let bar_x = i * 3;
              let bar_width = 1;
              let bar_height = -(freqData[i] / 2);
              ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)
            }
          }

        };


        // console.log('isMobile', isMobile)
        // console.log('renderFrame', 'yes')
        renderFrame()
      } else {
        // console.log('isMobile', isMobile)
        // console.log('(min-resolution: .001dpcm)', resolution)
        // console.log('(-webkit-min-device-pixel-ratio:0)', ratio)
        // console.log('all', all)
        // console.log('all and (-webkit-min-device-pixel-ratio:0) and (min-resolution: .001dpcm)', resolution && ratio && all)
        // console.log('supports', supports)
        // console.log('визуализация отключена')
      }


    } catch (e) {
      // console.log(e)
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
    handleTrackEnded,
    curTime,
    duration
  } = useAudioPlayer(audioPlayerRef, track);

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

      <canvas
        ref={analyzerCanvas}
        id="analyzer"
        style={{
          position: 'absolute',
          width: `${100}%`,
          height: `${90}%`,
          zIndex: -1,
          bottom: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'center',
          aligItems: 'center',
          opacity: 0.8,
          margin: `${0} ${10}`,

          WebkitMaskImage: `-webkit-linear-gradient(
            top,
            rgba(0, 0, 0, 0) 0%,
            rgba(0,0,0,1) 5%,
            rgba(0,0,0,1) 75%,
            rgba(0,0,0,0) 100%)`
        }}
      >
      </canvas>
    </>
  )
}

export default PlayerController;
