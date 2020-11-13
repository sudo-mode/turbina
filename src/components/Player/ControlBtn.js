import './ControlBtn.css';
import PlayBtn from '../svg/PlayIcon';
import PauseBtn from '../svg/PauseIcon';

function PlayerControlBtn({ isPlaying, onBtnClick }) {
  return (
    <button
      className="control-btn"
      type="button"
      onClick={onBtnClick}
    >
      {isPlaying
        ? <PauseBtn />
        : <PlayBtn className="control-btn_play" />
      }
    </button>
  )
}

export default PlayerControlBtn;
