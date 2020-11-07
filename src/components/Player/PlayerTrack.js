import './PlayerTrack.css';
import cn from 'classnames';
import { useState, useEffect } from 'react';

function PlayerTrack({ track, onTrackClick, inList, isLoading }) {

  const [loading, setLoading] = useState(isLoading);

  const trackStyle = cn('player__track', { 'player__track_info': inList }, { 'player__track_loading': loading });

  const handleClick = () => {
    if (onTrackClick) {
      onTrackClick(track)
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 100);

  }, [isLoading]);

  return (
    <p onClick={handleClick} className={trackStyle}>
      {`${track.trackName} — ${track.group} feat. ${track.author}`}
    </p>
  )
}

export default PlayerTrack;