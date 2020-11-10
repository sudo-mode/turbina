import './PlayerTrack.css';
import cn from 'classnames';
import { useState, useEffect } from 'react';

function PlayerTrack({ track, onTrackClick, inList, isLoading, trackId, currentTrack }) {

  const [loading, setLoading] = useState(isLoading);
  const checked = trackId === currentTrack.id
  const trackStyle = cn('player__track', { 'player__track_checked': checked }, { 'player__track_info': inList }, { 'player__track_loading': loading });

  const handleClick = () => {
    if (onTrackClick) {
      onTrackClick(track);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);

  }, [isLoading]);

  return (
    <p onClick={handleClick} className={trackStyle}>
      {`${track.trackName} — ${track.author} `}
      <span className='player__feat'> feat. </span>
      {`${track.originalAuthor}`}
    </p>
  )
}

export default PlayerTrack;
