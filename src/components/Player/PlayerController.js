import { useState, useEffect, useRef } from 'react';
import './PlayerController.css';
import useAudioPlayer from '../../hooks/useAudioPlayer';
import PlayerTimeline from './PlayerTimeline';
import playBtn from '../../images/play-icon.svg';
import pauseBtn from '../../images/pause-icon.svg';
import PlayerTimer from './PlayerTimer';
import useTicker from '../../hooks/useTicker';
// import PlayerTrack from './PlayerTrack';

function PlayerController ({ track }) {
  const handlePlayClick = () => {
    setPlaying(!isPlaying);
  }

  const trackRef = useRef();

  useTicker(trackRef);

  const { curTime, duration, isPlaying, setPlaying, setClickedTime } = useAudioPlayer();

  return (
    <div className="player__controller">
      <audio id="audio">
        <source src={track.link} />
      </audio>
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
          {`${track.trackName} — ${track.group} feat. ${track.author}`}
        </p>
      </div>
      <PlayerTimer
        duration={duration}
        curTime={curTime}
      />
      <PlayerTimeline
        curTime={curTime}
        duration={duration}
        onTimeUpdate={(time) => setClickedTime(time)}
      />
    </div>
  )
}

export default PlayerController;
