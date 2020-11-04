import './PlayerTrack.css';
import { useState, useEffect } from 'react';

function PlayerTrack({ track, onTrackClick, inList, isLoading }) {

  const [loading, setLoading] = useState(isLoading);

  const trackStyle = `player__track ${ inList && 'player__track_info'} ${ loading && 'player__track_loading'}`;

  const handleClick = () => {
    if (onTrackClick) {
      onTrackClick(track)
    }
  };

  useEffect(() => {
    setTimeout(()=> {
      setLoading(false)
    }, 100);
    
  }, [isLoading]);

  return (
      <button onClick={handleClick} className={trackStyle}>
        {`${track.trackName} — ${track.group} feat. ${track.author}`}
      </button>
  )
}

export default PlayerTrack;