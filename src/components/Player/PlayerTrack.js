import './PlayerTrack.css';
import cn from 'classnames';

function PlayerTrack({ track, onTrackClick, inList, trackId, currentTrack }) {

  const checked = trackId === currentTrack.id
  const trackStyle = cn('player__track', { 'player__track_checked': checked }, { 'player__track_info': inList });

  const handleClick = () => {
    if (onTrackClick) {
      onTrackClick(track);
    }
  };

  return (
    <p onClick={handleClick} className={trackStyle}>
      {`${track.trackName} — ${track.author} `}
      <span className='player__feat'> feat. </span>
      {`${track.originalAuthor}`}
    </p>
  )
}

export default PlayerTrack;
