import './ControlBtn.css';
import PlayIcon from '../svg/PlayIcon';
import PauseIcon from '../svg/PauseIcon';

function ControlBtn({ isPlaying, onBtnClick }) {
  return (
    <button
      className="control-btn control-btn__rounded"
      type="button"
      onClick={onBtnClick}
    >
      {isPlaying
        ? <PauseIcon className="control-btn__pause" />
        : <PlayIcon className="control-btn__play" />
      }
    </button>
  )
}

export default ControlBtn;
