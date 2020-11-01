import './PlayerInfo.css';
import PlayerTrack from './PlayerTrack';

function PlayerInfo({tracks, isOpen, text}) {

  return (
    <div className={`player__info ${isOpen && 'player__info_active'}`}>
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
