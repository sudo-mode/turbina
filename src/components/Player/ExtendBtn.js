import './ExtendBtn.css';
import ExtendBtnIcon from '../svg/ExtendRoundIcon';
import CloseBtnIcon from '../svg/CloseRoundIcon';

function ExtendBtn ({ isOpen, onBtnClick }) {
  return (
    <button
      className="extend-btn"
      type="button"
      onClick={onBtnClick}
    >
      {isOpen
        ? <CloseBtnIcon className="extend-btn_close" />
        : <ExtendBtnIcon className="extend-btn_open" />
      }
    </button>
  )
}

export default ExtendBtn;
