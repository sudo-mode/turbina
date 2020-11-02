import { useState, useEffect, useRef } from 'react';
import './PlayerController.css';
import playBtn from '../../images/play-icon.svg';
import pauseBtn from '../../images/pause-icon.svg';

function PlayerController ({ track }) {
  const [isPlaying, setPlayingState] = useState(false);

  const handlePlayClick = () => {
    setPlayingState(!isPlaying);
  }


  const trackRef = useRef();

  useEffect(() => {
    const elementWidth = trackRef.current.scrollWidth;
    const parentWidth = trackRef.current.parentElement.offsetWidth;
    if (elementWidth > parentWidth) {
      let currentX = trackRef.current.parentElement.offsetWidth;
      const scroll = () => {
        currentX--;
        trackRef.current.style.left = `${currentX}px`;
        if (currentX < (-1 * elementWidth)) {
          currentX = trackRef.current.parentElement.offsetWidth;
        }
      }
      trackRef.current.style.left = `${currentX}px`;
      setInterval(scroll, 7);
    }

  }, []);


  const audio = new Audio(track.link);

  // console.dir(audio);
  const timeline = useRef();
  // console.log(timeline.current);

  return (
    <>
      {/* <audio>
        <source src="https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"  type="audio/mp3" />
      </audio> */}
      <div className="player__controller">
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
            Контур — Хадн Дадн feat. Варя Карпова и Федя Быстров
          </p>

        </div>
        <span className="player__timer">
          0:24
        </span>
        <div className="player__timeline" ref={timeline}>
          <div className="player__progress" />
        </div>
      </div>
    </>
  )
}

export default PlayerController;
