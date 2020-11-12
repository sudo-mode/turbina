import { useRef, useEffect, useState } from 'react';
import './PlayerController.css';
import useAudioPlayer from '../../hooks/useAudioPlayer';
import PlayerTimeline from './PlayerTimeline';
import playBtn from '../../images/play-icon.svg';
import pauseBtn from '../../images/pause-icon.svg';
import PlayerTimer from './PlayerTimer';
import useTicker from '../../hooks/useTicker';
import useThrottling from '../../hooks/useThrottling';



import cn from 'classnames';
window.AudioContext = window.AudioContext || window.webkitAudioContext;
// Changing Variables
// let ctx, x_end, y_end, bar_height;

// constants
// const width = window.innerWidth;
// const height = window.innerHeight;
// const bars = 555;
// const bar_width = 1;
// const radius = 0;
// const center_x = width / 2;
// const center_y = height / 2;


function PlayerController({ isPlayerExtend, track }) {
  const trackRef = useRef();
  const audioPlayerRef = useRef();

  const [audioCtx, setAudioCtx] = useState(null);
  // const [update, serUpdate] = useState();
  const [canvasVisual, setCanvasVisual] = useState('canvas-visual');
  const [tick, setTick] = useState();



  const canvasRef = useRef();
  const barsRef = useRef();

  useEffect(() => {
    const context = new AudioContext();
    const audio = audioPlayerRef.current;
    const audioSrc = context.createMediaElementSource(audio);
    const analyser = context.createAnalyser();
    analyser.fftSize = 128;
    // analyser.fftSize = 64;

    audioSrc
      .connect(analyser)
      .connect(context.destination)
    analyser.connect(context.destination)

    setAudioCtx(context)

    const bufferLength = analyser.frequencyBinCount;
    const frequency_array = new Uint8Array(bufferLength);

    // visual 1

    // function animationLooper(canvas) {
    //   canvas.width = width;
    //   canvas.height = height;

    //   ctx = canvas.getContext("2d");

    //   for (var i = 0; i < bars; i++) {
    //     //divide a circle into equal part
    //     const rads = Math.PI * 2 / bars;

    //     // Math is magical
    //     bar_height = frequency_array[i] * 2;

    //     const x = center_x + Math.cos(rads * i) * (radius);
    //     const y = center_y + Math.sin(rads * i) * (radius);
    //     x_end = center_x + Math.cos(rads * i) * (radius + bar_height);
    //     y_end = center_y + Math.sin(rads * i) * (radius + bar_height);

    //     //draw a bar
    //     drawBar(x, y, x_end, y_end, frequency_array[i], ctx, canvas);
    //   }
    // }

    // function drawBar(x1 = 0, y1 = 0, x2 = 0, y2 = 0, frequency, ctx, canvas) {
    //   const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    //   gradient.addColorStop(0, "rgba(35, 7, 77, 1)");
    //   gradient.addColorStop(1, "rgba(204, 83, 51, 1)");
    //   ctx.fillStyle = gradient;

    //   const lineColor = "rgb(" + frequency + ", " + frequency + ", " + 205 + ")";
    //   ctx.strokeStyle = lineColor;
    //   ctx.lineWidth = bar_width;
    //   ctx.beginPath();
    //   ctx.moveTo(x1, y1);
    //   ctx.lineTo(x2, y2);
    //   ctx.stroke();
    // }
    // const tick = () => {
    //   animationLooper(canvas1.current);
    //   analyser.getByteTimeDomainData(frequency_array);
    //   const rafId = requestAnimationFrame(tick);
    //   serRafId(rafId)
    // }
    // setTick(tick);

    // visual 1 end

    // visual 2


    let bars = barsRef.current.children;

    let canvas = canvasRef.current;
    console.log(canvas)

    console.log(bars)
    for (let bar of bars) {
      console.log(bar)
    }


    function update() {
      // Schedule the next update
      setTimeout(() => {
        requestAnimationFrame(update);
        // Get the new frequency data
        analyser.getByteFrequencyData(frequency_array);

        // Update the visualisation
        // bars.forEach(function (index, bar) {
        //     bar.style.height = frequency_array[index] + 'px';
        // });
        if (bars) {
          for (let i = 0; i < bars.length; i++) {


            bars[i].style.height = Math.floor(frequency_array[i] / 3) + 'px';

            let colorCanvas = `rgb(${frequency_array[0]}, ${frequency_array[i]}, ${frequency_array[i]} )`;

            bars[i].style.backgroundColor = colorCanvas;

            bars[i].style.width = 3 + '%';

            bars[i].style.marginRight = 1 + '%';
          }
        }
      }, 30)

      console.log('update')




      // let colorCanvas = `rgb(${frequency_array[5]}, ${frequency_array[10]}, ${frequency_array[15]} )`
      // if (canvas) {
      //   canvas.style.backgroundColor = colorCanvas;
      // }





    };

    // serUpdate(update);



    update();



  }, []);

  // const updateThrottled = useThrottling(update, 5000);
  // if (update) {
  //   updateThrottled()
  // }



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
  } = useAudioPlayer(audioPlayerRef, track, audioCtx,
    //  update,
      tick);

  useEffect(() => {
    setCanvasVisual(cn('canvas-visual', { 'canvas-visual_active': isPlaying }))
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
        ref={canvasRef}
        className={canvasVisual}

        style={{
          position: 'fixed',
          width: `${100}%`,
          height: `${100}vh`,
          zIndex: -4,
          top: 0,
          left: 0,
        }}>


      </canvas>
      <div style={{
        position: 'absolute',
        width: `${100}%`,

        //  height: `${100}vh`,
        zIndex: -1,
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: .3,






      }}>
        <ul ref={barsRef}
          style={{
            width: `${96}%`,
            height: 100,
            // backgroundColor: 'black',
            // border: `1px solid red`,
            justifyContent: 'center',
            listStyle: 'none',
            bacgroundColor: 'red',
            display: 'flex',
            alignItems: 'flex-end',
            margin: 0,
            padding: 0,
            webkitMaskImage: `-webkit-linear-gradient(
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
