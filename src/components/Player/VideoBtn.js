import './VideoBtn.css';
import ClipBtnIcon from '../svg/ClipBtnIcon';

function VideoBtn ({ videoLink }) {
  return (
    <a className='video-link-wrapper'
      href={videoLink}
      target="_blank"
      rel="noreferrer"
    >
      <ClipBtnIcon className="video-link" />
    </a>
  )
}

export default VideoBtn;
