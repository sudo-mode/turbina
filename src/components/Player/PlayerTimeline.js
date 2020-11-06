import './PlayerTimeline.css';

function PlayerTimeline ({ duration, curTime, onTimeUpdate }) {
  const curPercentage = (curTime / duration) * 100;

  // TODO -- дописать логику установки текущего времени 
  // в соответствии с положением бегунка

  return (
    <div className="player__timeline">
      <div 
        className="player__progress"
        style={{ width: `${curPercentage}%` }}
      />
    </div>
  )
}

export default PlayerTimeline;
