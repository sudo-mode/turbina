import './PlayerSelector.css';

function PlayerSelector ({ isOpen }) {
  return (   
    <button className={`player__selector ${isOpen && 'player__selector_visible'}`} >Текст песни</button>
     
  )
}

export default PlayerSelector;
