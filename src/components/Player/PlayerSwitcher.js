import './PlayerSwitcher.css';
import extendBtn from '../../images/extend-icon.svg';
import closeBtn from '../../images/close-icon.svg';

function PlayerSwitcher (isOpen) {
  return (
    <>
      <div className="player__switchers">
        {/* { isOpen && <button></button> } */}
        
        <button
          className="player__extend-btn"
          type="button"
          style={{ backgroundImage: `url(${isOpen ? closeBtn : extendBtn})` }}
        />
        
      </div>
    </>
  )
}

export default PlayerSwitcher;
