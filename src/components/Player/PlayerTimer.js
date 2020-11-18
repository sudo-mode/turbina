import './PlayerTimer.css';
import formatDuration from '../../utils/formatDuration';

function PlayerTimer ({ duration, curTime }) {
  return (
    <span className="player__timer">
      {formatDuration(duration - curTime)}
    </span>
  )
}

export default PlayerTimer;
