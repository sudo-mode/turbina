import './PlayerTimer.css';

function PlayerTimer ({ duration, curTime }) {
  const formatDuration = (duration) => {
    let minutes = Math.floor(duration/60);
    let seconds = Math.floor(duration % 60);
    if (seconds < 10) {seconds = '0'+seconds;}
    return `${minutes}:${seconds}`;
  }
  
  return (
    <span className="player__timer">
      {formatDuration(duration - curTime)}
    </span>
  )
}

export default PlayerTimer;
