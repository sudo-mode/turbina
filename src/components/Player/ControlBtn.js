import './ControlBtn.css';
import PlayIcon from '../svg/PlayIcon';
import PauseIcon from '../svg/PauseIcon';

function PlayerControlBtn({ isPlaying, onBtnClick }) {
  return (
    <button
      className="control-btn"
      type="button"
      onClick={onBtnClick}
    >
      {isPlaying
        ? <PauseIcon className="control-Icon_pause" />
        : <PlayIcon className="control-btn_play" />
      }
    </button>
  )
}

export default PlayerControlBtn;
