import './PlayerSwitcher.css';

function PlayerSwitcher ({ isVisible }) {
  return (   
    <button 
      className={`player__switcher ${isVisible && 'player__switcher_visible'}`} 
    >
      Текст песни
    </button>
  )
}

export default PlayerSwitcher;
