import './PlayerTrack.css';

function PlayerTrack({ track }) {
  return (
    <li className='player__track'>{`${track.id} ${track.trackName} — ${track.group}. ${track.author}`}</li>
  )
}

export default PlayerTrack;
