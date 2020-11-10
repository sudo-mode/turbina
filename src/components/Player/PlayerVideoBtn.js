import './PlayerVideoBtn.css';
import cn from 'classnames';

function PlayerVideo({ videoLink }) {
  const playerVideoLink = cn('player__video-link', { 'player__video-link_active': videoLink });

  return (
    <a
      className={playerVideoLink}
      href={videoLink}
      target="_blank"
      rel="noreferrer"
    >
      <span className='player__video-icon'></span><span className='player__video-btn-text'>Клип</span>
    </a>

  )
}

export default PlayerVideo;