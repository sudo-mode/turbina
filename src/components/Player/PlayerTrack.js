import './PlayerTrack.css';

function PlayerTrack({ track, onTrackClick }) {

  const handleClick = () => {
    onTrackClick(track)
  }

  return (
    <li className='player__track-item'>
      <p onClick={handleClick} className='player__track'>
        {`${track.trackName} — ${track.group}. ${track.author}`}
      </p>
    </li>
  )
}

export default PlayerTrack;
