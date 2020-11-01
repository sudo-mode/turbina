import './PlayerExtendBtn.css';
import extendBtn from '../../images/extend-icon.svg';
import closeBtn from '../../images/close-icon.svg';

function PlayerExtendBtn (isOpen) {
  return (
    <>
        <button
          className="player__extend-btn"
          type="button"
          style={{ backgroundImage: `url(${isOpen ? closeBtn : extendBtn})` }}
        />
    </>
  )
}

export default PlayerExtendBtn;
