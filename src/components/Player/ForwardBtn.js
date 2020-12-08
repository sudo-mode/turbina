import './ControlBtn.css';
import ForwardIcon from '../svg/ForwardIcon';

function ForwardBtn({ onBtnClick }) {
  return (
    <button
      className="control-btn"
      type="button"
      onClick={onBtnClick}
    >
      <ForwardIcon className="control-btn__checkout" />
    </button>
  )
}

export default ForwardBtn;
