import './PlayerTimeline.css';

function PlayerTimeline ({ duration, curTime, onTimeUpdate }) {
  const curPercentage = (curTime / duration) * 100;

  const calculateClickedTime = (e) => {
    const timeline = document.querySelector('.player__timeline-container');
    const timelineWidth = timeline.clientWidth;
    const timelineStart = timeline.getBoundingClientRect().left;
    const clickedXposition = e.pageX;
    const clickedPositionOnTimeline = clickedXposition - timelineStart;
    const timePerPixel = duration / timelineWidth;
    
    return clickedPositionOnTimeline * timePerPixel;
  }

  const handleTimeDrag = (e) => {
    onTimeUpdate(calculateClickedTime(e));

    const updateTimeOnMove = eMove => {
      onTimeUpdate(calculateClickedTime(eMove));
    };

    document.addEventListener("mousemove", updateTimeOnMove);

    document.addEventListener("mouseup", function handleMouseUp () {
      document.removeEventListener("mousemove", updateTimeOnMove);
      document.removeEventListener('mouseup', handleMouseUp);
    });
  }

  return (
    <div 
      className="player__timeline-container"
      onMouseDown={e => handleTimeDrag(e)}
    >
      <div
        className="player__timeline"
      >
        <div 
          className="player__progress"
          style={{ width: `${curPercentage}%` }}
        />
      </div>
    </div>
  )
}

export default PlayerTimeline;
