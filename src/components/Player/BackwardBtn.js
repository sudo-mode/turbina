import './ControlBtn.css';
import BackwardIcon from '../svg/BackwardIcon';

function BackwardBtn({ onBtnClick }) {
  return (
    <button
      className="control-btn"
      type="button"
      onClick={onBtnClick}
    >
      <BackwardIcon className="control-btn__checkout" />
    </button>
  )
}

export default BackwardBtn;
