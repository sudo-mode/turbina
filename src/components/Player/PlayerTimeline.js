import { useRef } from 'react';
import './PlayerTimeline.css';

function PlayerTimeline ({ duration, curTime, onTimeUpdate }) {
  const timelineRef = useRef();

  // --- Страховка на случай неверного отсчёта времени, оставшегося до конца трека ---
  // При запуске трека после загрузки страницы первый раз audio.duration
  // не успевает правильно загрузиться и audio.currentTime превышает 
  // audio.duration, из-за чего curPercentage может быть больше 100.
  const curPercentage = curTime <= duration ? (curTime / duration) * 100 : 100;

  const calculateClickedTime = (e) => {
    const timeline = timelineRef.current;
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
        ref={timelineRef}
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
