import './PlayerVideo.css';
import cn from 'classnames';

function PlayerVideo({ videoLink }) {

  const playeVideLink = cn('player__video-link', { 'player__video-link_active': videoLink });
  console.log('videoLink', videoLink)

  return (
    <a
      className={playeVideLink}
      href={videoLink}
      target="_blank"
      rel="noreferrer"
    >
      <span className='player__video-icon'></span><span className='player__video-btn-text'>Клип</span>
    </a>

  )
}

export default PlayerVideo;