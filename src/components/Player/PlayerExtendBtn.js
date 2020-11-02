import './PlayerExtendBtn.css';
import extendBtn from '../../images/extend-icon.svg';
import closeBtn from '../../images/close-icon.svg';

function PlayerExtendBtn ({ isOpen, onClick }) {
  return (
    <>
        <button
          className="player__extend-btn"
          type="button"
          onClick={onClick}
          style={{ backgroundImage: `url(${isOpen ? closeBtn : extendBtn})` }}
        />
    </>
  )
}

export default PlayerExtendBtn;
