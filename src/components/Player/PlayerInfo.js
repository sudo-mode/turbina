import './PlayerInfo.css';
import PlayerTrack from './PlayerTrack';

function PlayerInfo({tracks}) {

  return (
    <div className='player__player-info'>
      <ul className='player__tracks'>
        {tracks.map((track, i) => (
          <PlayerTrack
            key={track.id}
            track={track}
          />
        ))}
      </ul>
    </div>

  )
}

export default PlayerInfo;